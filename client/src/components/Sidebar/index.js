import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import ColoredScrollbars from '../../utils/ColoredScrollbars';
import { Container, NewPlaylist, Nav, BlockUl } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

import Loading from '../Loading';

import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

class Sidebar extends Component {
    static propTypes = {
        getPlaylistsRequest: PropTypes.func.isRequired,
        playlists: PropTypes.shape({
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    title: PropTypes.string
                })
            ),
            loading: PropTypes.bool
        }).isRequired
    };

    componentDidMount() {
        const { getPlaylistsRequest } = this.props;
        getPlaylistsRequest();
    }

    render() {
        const { playlists } = this.props;

        return (
            <Container>
                <ColoredScrollbars style={{ width: 200, height: '100%' }}>
                    <BlockUl>
                        <Nav main>
                            <li>
                                <Link to="/"> Navegar </Link>
                            </li>
                            <li>
                                <a> Rádio </a>
                            </li>
                        </Nav>

                        <Nav>
                            <li>
                                <span>SUA BIBLIOTECA</span>
                            </li>
                            <li>
                                <a> Seu Daily Mix </a>
                            </li>
                            <li>
                                <a> Tocados recentemente </a>
                            </li>
                            <li>
                                <a> Músicas </a>
                            </li>
                            <li>
                                <a> Álbums </a>
                            </li>
                            <li>
                                <a> Artistas </a>
                            </li>
                            <li>
                                <a> Estações </a>
                            </li>
                            <li>
                                <a> Arquivos locais </a>
                            </li>
                            <li>
                                <a> Vídeos </a>
                            </li>
                            <li>
                                <a> Podcasts </a>
                            </li>
                        </Nav>

                        <Nav>
                            <li>
                                <span>Playlists</span>
                                {playlists.loading && <Loading />}
                            </li>
                            {playlists.data.map(playlist => (
                                <li key={playlist.id}>
                                    <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                                </li>
                            ))}
                        </Nav>
                    </BlockUl>
                    <NewPlaylist>
                        <img src={AddPlaylistIcon} alt="Adicionar playlist" />
                        Nova playlist
                    </NewPlaylist>
                </ColoredScrollbars>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    playlists: state.playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
