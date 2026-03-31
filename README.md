# Wallet App

React + TypeScript wallet app with two screens: TransactionsList and TransactionDetail.

## Setup

```bash
npm install
npm run dev
```

## Structure

```
src/
  data/transactions.json   # test data
  utils/points.ts          # daily points calculation
  utils/date.ts            # date formatting
  components/
    TransactionsList.tsx
    TransactionDetail.tsx
  types.ts
  App.tsx
  App.css
```

## Features
- Card balance block ($17.30 / $1482.70 available)
- No Payment Due block
- Daily Points (season-based formula)
- 10 transactions with proper date formatting
- Pending prefix, authorized user display
- Payment transactions show green with "+"
- Click → TransactionDetail with full info
- FontAwesome icons
