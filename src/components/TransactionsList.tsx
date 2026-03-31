import React from 'react';
import { Transaction } from '../types';
import { formatDate } from '../utils/date';
import { getSeasonDay, calcDailyPoints, formatPoints } from '../utils/points';

const CARD_LIMIT = 1500;

interface Props {
  transactions: Transaction[];
  onSelect: (tx: Transaction) => void;
  cardBalance: number;
}

function buildDescription(tx: Transaction): string {
  return tx.pending ? `Pending - ${tx.description}` : tx.description;
}

function buildMeta(tx: Transaction): string {
  const datePart = formatDate(tx.date);
  return tx.authorizedUser ? `${tx.authorizedUser} – ${datePart}` : datePart;
}

const TransactionsList: React.FC<Props> = ({ transactions, onSelect, cardBalance }) => {
  const available = (CARD_LIMIT - cardBalance).toFixed(2);
  const day = getSeasonDay();
  const pts = calcDailyPoints(day);

  return (
    <div className="screen">
      <div className="top-cards">
        <div className="card">
          <div className="card-label">Card Balance</div>
          <div className="card-value">${cardBalance.toFixed(2)}</div>
          <div className="card-sub">${available} Available</div>
        </div>
        <div className="card card-right">
          <div>
            <div className="no-pay-label">No Payment Due</div>
            <div className="no-pay-desc">You've paid your September balance.</div>
          </div>
          <div className="check-circle">
            <i className="fa-solid fa-check" />
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="card">
          <div className="card-label">Daily Points</div>
          <div className="card-value" style={{ fontSize: 22 }}>{formatPoints(pts)}</div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="card-label">Season Day</div>
            <div className="card-value" style={{ fontSize: 22 }}>{day}</div>
          </div>
        </div>
      </div>

      <div className="transactions-section">
        <div className="section-title">Latest Transactions</div>
        <div className="tx-list">
          {transactions.map((tx) => (
            <div key={tx.id} className="tx-row" onClick={() => onSelect(tx)}>
              <div className="tx-icon" style={{ background: tx.iconBg }}>
                <i className={tx.faIcon} style={{ fontSize: 16, color: '#fff' }} />
              </div>
              <div className="tx-body">
                <div className="tx-name">{tx.name}</div>
                <div className="tx-desc">{buildDescription(tx)}</div>
                <div className="tx-desc">{buildMeta(tx)}</div>
              </div>
              <div className="tx-right">
                <div className={`tx-amount${tx.type === 'Payment' ? ' positive' : ''}`}>
                  {tx.type === 'Payment' ? '+' : ''}${tx.amount.toFixed(2)}
                </div>
                {tx.cashback && <div className="tx-cashback">{tx.cashback}%</div>}
              </div>
              <i className="fa-solid fa-chevron-right chevron" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
