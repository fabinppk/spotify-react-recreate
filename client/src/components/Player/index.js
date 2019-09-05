import React, { Fragment } from 'react';
import Sound from 'react-sound';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from 'rc-slider';
import { Creators as PlayerActions } from '../../store/ducks/player';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({
    player,
    play,
    pause,
    next,
    prev,
    playing,
    position,
    duration,
    handlePosition,
    setPosition,
    positionShown,
    progress,
    setVolume
}) => (
    <Container>
        {!!player.currentSong && (
            <Sound
                url={player.currentSong.file}
                onFinishedPlaying={next}
                playStatus={player.status}
                onPlaying={playing}
                position={player.position}
                volume={player.volume}
            />
        )}
        <Current>
            {!!player.currentSong && (
                <Fragment>
                    <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />

                    <div>
                        <p>{player.currentSong.title}</p>
                        <small>{player.currentSong.author}</small>
                    </div>
                </Fragment>
            )}
        </Current>

        <Progress>
            <Controls>
                <button type="submit">
                    <img src={ShuffleIcon} alt="Shuffle" />
                </button>
                <button onClick={prev} type="submit">
                    <img src={BackwardIcon} alt="Back" />
                </button>
                {!!player.currentSong && player.status === Sound.status.PLAYING ? (
                    <button onClick={pause} type="submit">
                        <img src={PauseIcon} alt="Play" />
                    </button>
                ) : (
                    <button onClick={play} type="submit">
                        <img src={PlayIcon} alt="Play" />
                    </button>
                )}
                <button onClick={next} type="submit">
                    <img src={ForwardIcon} alt="Foward" />
                </button>
                <button type="submit">
                    <img src={RepeatIcon} alt="Repeat" />
                </button>
            </Controls>

            <Time>
                <span>{positionShown || position}</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{ background: '#404040', borderRadius: 10 }}
                        trackStyle={{ background: '#1ED760' }}
                        handleStyle={{ border: 0 }}
                        max={1000}
                        onChange={value => handlePosition(value / 1000)}
                        onAfterChange={value => setPosition(value / 1000)}
                        value={progress}
                    />
                </ProgressSlider>
                <span>{duration}</span>
            </Time>
        </Progress>

        <Volume>
            <img src={VolumeIcon} alt="Volume" />
            <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#fff' }}
                handleStyle={{ display: 'none' }}
                value={player.volume}
                onChange={setVolume}
            />
        </Volume>
    </Container>
);

Player.propTypes = {
    player: PropTypes.shape({
        currentSong: PropTypes.shape({
            file: PropTypes.string,
            thumbnail: PropTypes.string,
            author: PropTypes.string,
            title: PropTypes.string
        }),
        status: PropTypes.string
    }).isRequired,
    play: PropTypes.func,
    pause: PropTypes.func,
    next: PropTypes.func,
    prev: PropTypes.func,
    playing: PropTypes.func,
    position: PropTypes.string,
    duration: PropTypes.string,
    handlePosition: PropTypes.func,
    setPosition: PropTypes.func,
    positionShown: PropTypes.func,
    progress: PropTypes.number,
    setVolume: PropTypes.func.isRequired
};

Player.defaultProps = {
    play: () => {},
    pause: () => {},
    next: () => {},
    prev: () => {},
    playing: () => {},
    position: undefined,
    duration: undefined,
    handlePosition: () => {},
    setPosition: () => {},
    positionShown: () => {},
    progress: PropTypes.number
};

function msToTime(duration) {
    if (!duration) return null;

    let seconds = parseInt((duration / 1000) % 60, 10);
    const minutes = parseInt((duration / (1000 * 60)) % 60, 10);
    /* const minutes = parseInt(((duration / (1000 * 60)) % 60), 10); */

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
}

const mapStateToProps = state => ({
    player: state.player,
    position: msToTime(state.player.position),
    duration: msToTime(state.player.duration),
    positionShown: msToTime(state.player.positionShown),
    progress:
        parseInt(
            (state.player.positionShown || state.player.position) * (1000 / state.player.duration),
            10
        ) || 0
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);
