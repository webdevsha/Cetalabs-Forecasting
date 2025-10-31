import { useState } from 'react';
import PolicyEventCard, { type PolicyEvent } from '../PolicyEventCard';

export default function PolicyEventCardExample() {
  const [events, setEvents] = useState<PolicyEvent[]>([
    {
      id: "event-1",
      title: "Vietnam 50k Engineer Program Milestone",
      date: "Q2 2027",
      year: 2027,
      description: "Vietnam reaches halfway point of 50,000 engineer training target",
      impact: 15,
      isPositive: true,
      category: "talent",
      enabled: true,
    }
  ]);

  const handleToggle = (id: string) => {
    setEvents(events.map(e => 
      e.id === id ? { ...e, enabled: !e.enabled } : e
    ));
  };

  return (
    <div className="p-6 max-w-md">
      <PolicyEventCard event={events[0]} onToggle={handleToggle} />
    </div>
  );
}
