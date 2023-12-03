import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Player, ControlBar } from 'video-react';

function VideoPage({ counter, diff }) {
  const [source, setSource] = useState('');

  useEffect(() => {
    setSource('http://localhost:8080/video/test2.mp4');
  }, []);
  const $player = useRef(null);

  return (
    <div>
      <p>{`video Counter:${counter} / Diff:${diff}`}</p>
      <Player
        ref={$player}
      >
        <source src={source} />
        <ControlBar />
      </Player>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter.get('value'),
  diff: state.counter.get('diff'),
});

export default connect(mapStateToProps)(VideoPage);
