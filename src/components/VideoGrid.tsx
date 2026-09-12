import React from 'react';
import { VideoTile } from './VideoTile';
import { participants } from '../data/meeting';
export function VideoGrid() {
  return (
    <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
      {participants.map((p) =>
      <VideoTile key={p.id} participant={p} />
      )}
    </div>);

}