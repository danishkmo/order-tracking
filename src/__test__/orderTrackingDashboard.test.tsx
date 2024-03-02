import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderTrackingDashboard from "../containers/OrderTrackingDashboard";

test('OrderTrackingDashboard', () => {
  const com = render(<OrderTrackingDashboard />);
  expect(com).toBeDefined();
});
