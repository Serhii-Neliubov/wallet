import React from 'react';
import { Transaction } from '../types';
import { formatFullDate } from '../utils/date';

interface Props {
  tx: Transaction;
  onBack: () => void;
}

const TransactionDetail: React.FC<Props> = ({ tx, onBack }) => {
  return (
    <div className="detail-screen">
      <div className="detail-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fa-solid fa-chevron-left" style={{ fontSize: 14 }} />
          <span style={{ marginLeft: 4 }}>Back</span>
        </button>
      </div>

      <div className="detail-amount">
        {tx.type === 'Payment' ? '+' : ''}${tx.amount.toFixed(2)}
      </div>
      <div className="detail-merchant">
        <div style={{ fontWeight: 500, color: '#1c1c1e', fontSize: 17 }}>{tx.name}</div>
        <div style={{ marginTop: 4 }}>{formatFullDate(tx.date)}</div>
      </div>

      <div className="detail-card">
        <div className="status-block">
          <div className="status-title">Status: {tx.status}</div>
          <div className="status-sub">{tx.bank}</div>
        </div>
        <div className="detail-row">
          <span className="detail-row-label" style={{ fontWeight: 700 }}>Total</span>
          <span style={{ fontSize: 15, fontWeight: 500, color: '#1c1c1e' }}>${tx.amount.toFixed(2)}</span>
        </div>
      </div>

      {(tx.cashback || tx.authorizedUser || tx.pending) && (
        <div className="detail-card" style={{ marginTop: 16 }}>
          <div className="detail-row">
            <span className="detail-row-label">Type</span>
            <span className="detail-row-val">{tx.type}</span>
          </div>
          {tx.cashback && (
            <div className="detail-row">
              <span className="detail-row-label">Cashback</span>
              <span className="detail-row-val">{tx.cashback}%</span>
            </div>
          )}
          {tx.authorizedUser && (
            <div className="detail-row">
              <span className="detail-row-label">Authorized User</span>
              <span className="detail-row-val">{tx.authorizedUser}</span>
            </div>
          )}
          {tx.pending && (
            <div className="detail-row">
              <span className="detail-row-label">Pending</span>
              <span className="detail-row-val" style={{ color: '#ff9500' }}>Yes</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;
