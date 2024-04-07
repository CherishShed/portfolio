import React from "react";
import { Timeline, TimelineItemProps } from "antd";

interface MyTimelineProps {
  items: TimelineItemProps[];
}

const MyTimeline: React.FC<MyTimelineProps> = ({ items }) => (
  <Timeline items={items} className="w-[80%]" />
);

export default MyTimeline;
