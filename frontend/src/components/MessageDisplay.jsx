import { useState, useEffect } from 'react';
import { fetchMessage } from '../services/api';

function MessageDisplay() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMessage() {
      try {
        setLoading(true);
        const result = await fetchMessage();
        setData(result);
        setError(null);
      } catch (err) {
        setError('Failed to fetch message from server');
        console.error('Error fetching message:', err);
      } finally {
        setLoading(false);
      }
    }

    loadMessage();
  }, []);

  if (loading) {
    return <div className="loading">Loading message...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="message-display">
      <h2>{data.message}</h2>
      <p className="timestamp">
        Received at: {new Date(data.timestamp).toLocaleString('en-GB')}
      </p>
    </div>
  );
}

export default MessageDisplay;
