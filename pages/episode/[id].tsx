import { GetServerSideProps } from 'next';
import ReactPlayer from 'react-player'
import React from 'react';
import Duration from '../../components/duration'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

interface IProps {
    episodes: any[];
}

interface IState {
    playing: boolean,
    controls: boolean,
    light: boolean,
    volume: number,
    muted: boolean,
    played: number,
    loaded: number,
    duration: number,
    playbackRate: number,
    loop: boolean
}

export default class Home extends React.Component<IProps, IState> {
    private playerRef: React.RefObject<ReactPlayer>;
    constructor(props: IProps) {
        super(props);

        this.state = {
            playing: false,
            controls: false,
            light: false,
            volume: 0.7,
            muted: false,
            played: 0,
            loaded: 0,
            duration: 0,
            playbackRate: 1.0,
            loop: false
        };
        this.playerRef = React.createRef();
    }


    handleSetPlaybackRate = () => {
        const { playbackRate } = this.state;
        let newRate = playbackRate === 1 ? 1.5 : playbackRate === 1.5 ? 2 : 1;
        this.setState({ playbackRate: newRate })
    }

    handlePlayPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    handleDuration = (duration) => {
        this.setState({ duration })
    }

    handleProgress = state => {
        const { duration } = this.state;
        const { played } = state;
        this.setState({ played: played * duration });
    }

    handleSeekForward = () => {
        let currentTime = this.playerRef.current.getCurrentTime();
        let forwardTo = Math.min(currentTime + 30, this.playerRef.current.getDuration());
        this.playerRef.current.seekTo(forwardTo);
    }

    handleSeekBack = () => {
        let currentTime = this.playerRef.current.getCurrentTime();
        let backTo = Math.max(currentTime - 30, 0);
        this.playerRef.current.seekTo(backTo);
    }

    render() {
        const { episodes } = this.props;
        const { playing, played, duration, playbackRate, loaded } = this.state;

        return (
            <>
                {episodes.map((episode) => (
                    <div className="w-1/2 m-auto">
                        <h1 className="text-4xl mt-10 mb-10">{episode.fields.episode_name}</h1>
                        <div key={episode.id} >
                            <div className="bg-gray-200 rounded sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                                <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                                    <img src={episode.fields.art[0].url} alt="" width="160" height="160" className="flex-none w-20 h-20 rounded-lg bg-gray-100" />
                                    <div className="min-w-0 flex-auto space-y-0.5">
                                        <p className="dark:text-indigo-400 text-sm sm:text-base lg:text-sm xl:text-base font-semibold uppercase">
                                            {episode.fields.episode_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-gray-300 rounded-full overflow-hidden">
                                        <div className="bg-indigo-300 h-1.5" style={{ width: (played / duration) * 100 + '%' }} aria-valuenow={played} aria-valuemin={loaded} aria-valuemax={duration}></div>
                                        <ReactPlayer
                                            ref={this.playerRef}
                                            width="100%"
                                            height="0"
                                            url={episode.fields.recording[0].url}
                                            onDuration={this.handleDuration}
                                            playing={playing}
                                            onProgress={this.handleProgress}
                                            playbackRate={playbackRate}
                                        />
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
                                        <div><Duration seconds={played}></Duration></div>
                                        <div><Duration seconds={duration} /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 text-black dark:bg-gray-900 dark:text-white lg:rounded-b-xl py-4 px-1 sm:px-3 lg:px-1 xl:px-3 grid grid-cols-4 items-center">
                                <button onClick={this.handleSeekBack} type="button" className="mx-auto">
                                    <svg width="34" height="39" fill="none">
                                        <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
                                        <path d="M1 22c0 8.837 7.163 16 16 16s16-7.163 16-16S25.837 6 17 6" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M17 0L9 6l8 6V0z" fill="currentColor" />
                                    </svg>
                                </button>
                                <button onClick={this.handlePlayPause} type="button" className="mx-auto">{
                                    playing ? (
                                        <svg width="50" height="50" fill="none">
                                            <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor" />
                                        </svg>)
                                        : (<svg width="50" height="50" viewBox="0 0 50 50" >
                                            <path transform="translate(20, 15)" d="M13 9L0 0V18L13 9Z" fill="currentColor" />
                                        </svg>)
                                }
                                </button>
                                <button onClick={this.handleSeekForward} type="button" className="mx-auto">
                                    <svg width="34" height="39" fill="none">
                                        <path d="M12.878 26.12c1.781 0 3.09-1.066 3.085-2.515.004-1.104-.665-1.896-1.824-2.075v-.068c.912-.235 1.505-.95 1.5-1.93.005-1.283-1.048-2.379-2.727-2.379-1.602 0-2.89.968-2.932 2.387h1.274c.03-.801.784-1.287 1.64-1.287.892 0 1.475.541 1.471 1.346.004.844-.673 1.398-1.64 1.398h-.738v1.074h.737c1.21 0 1.91.614 1.91 1.491 0 .848-.738 1.424-1.765 1.424-.946 0-1.683-.486-1.734-1.262H9.797c.055 1.424 1.317 2.395 3.08 2.395zm7.734.025c2.016 0 3.196-1.645 3.196-4.504 0-2.838-1.197-4.488-3.196-4.488-2.003 0-3.196 1.645-3.2 4.488 0 2.855 1.18 4.5 3.2 4.504zm0-1.138c-1.18 0-1.892-1.185-1.892-3.366.004-2.174.716-3.371 1.892-3.371 1.172 0 1.888 1.197 1.888 3.37 0 2.182-.712 3.367-1.888 3.367z" fill="currentColor" />
                                        <path d="M33 22c0 8.837-7.163 16-16 16S1 30.837 1 22 8.163 6 17 6" stroke="currentColor" stroke-width="1.5" />
                                        <path d="M17 0l8 6-8 6V0z" fill="currentColor" />
                                    </svg>
                                </button>

                                <button onClick={this.handleSetPlaybackRate} type="button" className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400">
                                    {playbackRate}x
                                </button>
                            </div>
                        </div>
                        <p>{episode.fields.show_notes}</p>
                        <div className="mt-5 mb-5">
                            <h1 className="mt-5 mb-5">Guest info:</h1>
                            <p>{episode.fields.bio}</p>
                        </div>
                        <ul className="mb-10 mt-10 flex flex-row self-center">
                            <li className="mr-5">
                                <h2>Follow {episode.fields.guest_name} on social media:</h2>
                            </li>
                            <li className="mr-5 ml-5">
                                <Link href={episode.fields.guest_twitter}>
                                    <a>
                                        <Image
                                            src="/twitter.png"
                                            alt="Picture of the author"
                                            width={30}
                                            height={30}>
                                        </Image>
                                    </a>
                                </Link>
                            </li>
                            <li className="mr-5 ml-5">
                                <Link href={episode.fields.guest_linkedin}>
                                    <a>
                                        <Image
                                            src="/linkedin.png"
                                            alt="Picture of the author"
                                            width={30}
                                            height={30}>
                                        </Image>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </>
        )
    }
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + process.env.AIRTABLE_API);

    let episodes = []

    let response = 
    await fetch(`https://api.airtable.com/v0/appN0b1jz6irTGYdC/Episodes?filterByFormula=SEARCH(\"${ctx.query.id}\",{slug})`, {
      method: 'GET',
      headers: headers
    });
    let episodesInfo = await response.json();
    episodes = episodesInfo.records;
    return {
        props:
            { episodes: episodes }
    }
}