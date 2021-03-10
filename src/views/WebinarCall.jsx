import React, { useEffect, useRef, useState } from "react";
import DailyIframe from "@daily-co/daily-js";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router";
import { startCase } from "lodash";

const CALL_OPTIONS = {
  iframeStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid #e6eaef",
    borderRadius: "6px 6px 0 0",
  },
  showLeaveButton: true,
  showFullscreenButton: true,

  //   showLocalVideo: false,
  //   showParticipantsBar: false,
};

const DOMAIN = "tupublish2021";
const ROOM_ID = "V56LWbef2AdEJivmyooo";

const DEFAULT_HEIGHT = 400;

const WebinarCall = () => {
  const videoRef = useRef(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [callframe, setCallframe] = useState(null);

  const location = useLocation();
  const history = useHistory();
  console.log(location);

  //Joining a room
  useEffect(() => {
    joinMeeting();
  }, [videoRef]);

  const joinMeeting = () => {
    if (!videoRef || !videoRef?.current || callframe) return;
    CALL_OPTIONS.url = location.state.url;

    const newCallframe = DailyIframe.createFrame(
      videoRef.current,
      CALL_OPTIONS
    );

    newCallframe.join().then((call) => {
      setHeight((videoRef?.current?.clientWidth || 500) * 0.75);
      setCallframe(newCallframe);
    });
    newCallframe.on("left-meeting", () => {
      history.replace("/");
    });
  };

  return (
    <div>
      <SubHeader>WELCOME TO OUR WEBINAR!</SubHeader>
      <Header>{startCase(location.state.name)}</Header>
      <VideoContainer height={height}>
        <Callframe ref={videoRef} />
      </VideoContainer>
    </div>
  );
};

const Header = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-bottom: 2rem;
`;
const SubHeader = styled.div`
  font-size: 1rem;
  padding-top: 3rem;
  text-align: center;
  color: #aaa;
`;
const VideoContainer = styled.div`
  margin: auto;
  max-width: 1000px;
  height: ${(props) => (props.hidden ? "100" : props.height)}px;
`;
const Callframe = styled.div`
  width: 100%;
  height: 100%;
`;

export default WebinarCall;
