import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ColoredScrollbars from '../../utils/ColoredScrollbars';
import { Container, Header, BlockSongList, SongList, SongItem } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

import Loading from '../../components/Loading';

// import { Link } from 'react-router-dom';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

class Playlist extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        }).isRequired,
        getplaylistDetailsRequest: PropTypes.func.isRequired,
        playlistDetails: PropTypes.shape({
            data: PropTypes.shape({
                thumbnail: PropTypes.string,
                title: PropTypes.string,
                description: PropTypes.string,
                songs: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.number,
                        title: PropTypes.string,
                        author: PropTypes.string,
                        album: PropTypes.string
                    })
                )
            }),
            loading: PropTypes.bool
        }).isRequired,
        loadSong: PropTypes.func.isRequired,
        currentSong: PropTypes.shape({
            id: PropTypes.number
        })
    };

    static defaultProps = {
        currentSong: undefined
    };

    state = {
        selectedSong: null
    };

    componentDidMount() {
        this.loadPlaylistDetails();
    }

    componentDidUpdate(prevProps) {
        const { match } = this.props;
        if (prevProps.match.params.id !== match.params.id) {
            this.loadPlaylistDetails();
        }
    }

    loadPlaylistDetails = () => {
        const { match } = this.props;
        const { id } = match.params;
        const { getplaylistDetailsRequest } = this.props;
        getplaylistDetailsRequest(id);
    };

    renderPlaylist = () => {
        const { playlistDetails } = this.props;
        const { selectedSong } = this.state;
        const { currentSong } = this.props;
        const { loadSong } = this.props;

        const playlist = playlistDetails.data;

        return (
            <Container>
                <Header>
                    <img src={playlist.thumbnail} alt={playlist.title} />

                    <div>
                        <span>PLAYLIST</span>
                        <h1>{playlist.title}</h1>
                        {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

                        <button type="submit">Play</button>
                    </div>
                </Header>
                <BlockSongList>
                    <ColoredScrollbars>
                        <SongList cellPadding={0} cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th />
                                    <th>Título</th>
                                    <th>Artista</th>
                                    <th>Álbum</th>
                                    <th>
                                        <img src={ClockIcon} alt="Duração" />
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {!playlist.songs ? (
                                    <tr>
                                        <td colSpan={5}>Nenhuma música cadastrada</td>
                                    </tr>
                                ) : (
                                    playlist.songs.map(song => (
                                        <SongItem
                                            key={song.id}
                                            onClick={() => this.setState({ selectedSong: song.id })}
                                            onDoubleClick={() => loadSong(song, playlist.songs)}
                                            selected={selectedSong === song.id}
                                            playing={currentSong && currentSong.id === song.id}
                                        >
                                            <td>
                                                <img src={PlusIcon} alt="Adicionar" />
                                            </td>
                                            <td>{song.title}</td>
                                            <td>{song.author}</td>
                                            <td>{song.album}</td>
                                            <td>{song.duration}</td>
                                        </SongItem>
                                    ))
                                )}
                            </tbody>
                        </SongList>
                    </ColoredScrollbars>
                </BlockSongList>
            </Container>
        );
    };

    render() {
        const { playlistDetails } = this.props;
        return playlistDetails.loading ? (
            <Container loading="true">
                <Loading />
            </Container>
        ) : (
            this.renderPlaylist()
        );
    }
}

const mapStateToProps = state => ({
    playlistDetails: state.playlistDetails,
    currentSong: state.player.currentSong
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...PlaylistDetailsActions,
            ...PlayerActions
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist);
