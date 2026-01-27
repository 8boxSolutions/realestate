import { X, Calendar, HandCoins, CalendarX } from 'lucide-react';

interface NotificationPopupProps {
  onClose: () => void;
}

const notifications = [
  { id: 1, title: 'New Transaction Update', desc: 'Lorem ipsum...', time: '1m ago', type: 'transaction' },
  { id: 2, title: 'Request Viewing', desc: 'Lorem ipsum...', time: '1m ago', type: 'request' },
  { id: 3, title: 'Canceled Booking/Viewing', desc: 'Lorem ipsum...', time: '1m ago', type: 'canceled' },
  { id: 4, title: 'Upcoming Viewing', desc: 'Lorem ipsum...', time: '1m ago', type: 'upcoming' },
];

const NotificationPopup = ({ onClose }: NotificationPopupProps) => {
  return (
    <div className="absolute right-0 top-16 z-50 mt-2 w-96 rounded-xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-gray-600"
          aria-label="Close notifications"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 px-4 pb-4 text-sm font-medium">
        <button className="text-green-600">All</button>
        <button className="text-gray-400 hover:text-gray-600">Read</button>
        <button className="text-gray-400 hover:text-gray-600">Unread</button>
      </div>

      {/* Notification List */}
      <div className="flex flex-col bg-gray-50/50">
        {notifications.map((item) => (
          <div key={item.id} className="border-b border-gray-100 p-4 hover:bg-white transition-colors">
            <div className="flex gap-3">
              <div className="mt-1">
                {item.type === 'transaction' && <div className="rounded bg-green-100 p-2 text-green-600"><HandCoins className="h-5 w-5" /></div>}
                {item.type === 'request' && <div className="rounded bg-blue-100 p-2 text-blue-600"><Calendar className="h-5 w-5" /></div>}
                {item.type === 'canceled' && <div className="rounded bg-red-100 p-2 text-red-600"><CalendarX className="h-5 w-5" /></div>}
                {item.type === 'upcoming' && <div className="rounded bg-orange-100 p-2 text-orange-600"><Calendar className="h-5 w-5" /></div>}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                <div className="mt-2 text-right">
                  <button className="text-xs font-semibold text-blue-500 hover:underline">Check Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPopup;