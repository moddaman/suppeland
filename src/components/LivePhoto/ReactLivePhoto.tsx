import React, { Component } from "react";
import * as LivePhotosKit from "livephotoskit";

interface ProfileProps {
  width: string;
  height: string;
  age: number;
  className: any;
}

interface ProfileState {
  player: any;
}

class ReactLivePhotos extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);

    this.syncSize = this.syncSize.bind(this);
  }

  syncSize() {
    const { width, height } = this.props;
    const photoWidth = width || this.state.player.photoWidth;
    const photoHeight = height || this.state.player.photoHeight;

    this.state.player.style.width = `${photoWidth}px`;
    this.state.player.style.height = `${photoHeight}px`;
    // this.player.updateSize(100)
  }

  componentDidMount() {
    const { className, width, height, ...props } = this.props;
    this.setState({
      player: LivePhotosKit.Player()
    });
    this.state.player.proactivelyLoadsVideo = true;

    for (let key in props) {
      this.state.player[key] = props[key];
    }

    this.player.addEventListener("photoload", this.syncSize);
    this.el.appendChild(this.player);
    this.player.stop();

    this.el.style.display = "inline-block";
  }

  componentWillUnmount() {
    this.el.removeChild(this.player);
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

export default ReactLivePhotos;
