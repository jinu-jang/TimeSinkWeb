import React from 'react';
import FullPageBackground from './FullPageBackground';

/* Consider using hooks when moving to functional components.
 * https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 */

interface IProps {
    backgroundColors: Array<string>
}

interface IState {
    backgroundColors: Array<string>,
    height: number,
    prevY: number
}

export default class OuroborosPage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            backgroundColors: props.backgroundColors,
            height: 0,
            prevY: 0
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        const windowHeight = window.innerHeight;

        this.updateWindowDimensions();
        this.jumpToY(windowHeight);
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);
    }


    updateWindowDimensions() {
        this.setState({height: window.innerHeight});
    }

    handleScroll() {
        const scrollY = window.scrollY;
        const height = this.state.height;
        const shiftDistance = height * this.state.backgroundColors.length;
        const prevY = this.state.prevY;

        if (scrollY < height && prevY > scrollY) {
            // Scrolling up. Teleport to bottom.
            this.jumpToY(scrollY + shiftDistance);
        }
        else if (scrollY > shiftDistance && prevY < scrollY) {
            // Scrolling down.
            // shiftDistance + height is n + 1 screens down. (bottom buffer)
            this.jumpToY(scrollY - shiftDistance);
        } else {
            this.setState({prevY: scrollY});
        }
    }

    jumpToY(y: number) {
        this.setState({prevY: y});
        window.scrollTo({
            top: y,
            behavior: "auto"
        })
    }

    render() {
        const carouselArr = this.state.backgroundColors.slice();
        carouselArr.unshift(carouselArr[carouselArr.length - 1])
        carouselArr.push(carouselArr[1]);


        return (
            <div onScroll={this.handleScroll} className="Ouroboros">
                {carouselArr.map((s) => {
                    return <FullPageBackground backgroundColor={s} />
                })}
            </div>
        );

    }
}
