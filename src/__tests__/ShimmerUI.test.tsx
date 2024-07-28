import { render, screen } from '@testing-library/react';
import Shimmer from '../components/ShimmerUI';
import '@testing-library/jest-dom';

test('renders shimmer UI', () => {
  render(<Shimmer cards={1} />);
  const shimmerElement = screen.getByTestId('shimmer');
  expect(shimmerElement).toBeInTheDocument();
});