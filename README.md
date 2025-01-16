# Football Predictions Dashboard 🎯⚽

A modern web application that displays football match predictions with probability scores and analysis. Features a cyberpunk-inspired dark mode and responsive design.

![Dashboard Preview](preview.png)

## Features

- 🌓 Light/Dark mode toggle with cyberpunk theme
- 📊 Top predictions section with probability indicators
- 🎯 Detailed match predictions with analysis
- 📱 Responsive design for all devices
- ✨ Modern glass-morphism UI effects
- 🔄 Smooth theme transitions

## Technologies Used

- **Frontend Framework**: Next.js 13
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
  - Custom animations
- **Type Safety**: TypeScript
- **State Management**: React Hooks
- **Testing**: Jest & React Testing Library
- **Code Quality**:
  - ESLint
  - Prettier
  - Husky pre-commit hooks

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/football-predictions.git
cd football-predictions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── fire-meter/    # Probability indicator component
│   ├── header/        # App header with theme switch
│   ├── prediction-card/# Individual prediction cards
│   └── top-predictions/# Featured predictions section
├── styles/           # Global styles and Tailwind config
├── types/            # TypeScript interfaces
├── utils/            # Helper functions
└── data/            # Prediction data
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run tests
npm run test

# Run linter
npm run lint
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Structure

```
__tests__/
├── components/          # Component tests
│   ├── PredictionCard.test.tsx
│   ├── FireMeter.test.tsx
│   └── TopPredictions.test.tsx
├── utils/              # Utility function tests
│   └── predictions.test.ts
└── pages/              # Page tests
    └── index.test.tsx
```

### Testing Stack

- **Jest**: Test runner and assertion library
- **React Testing Library**: Component testing
- **MSW**: API mocking
- **jest-dom**: DOM testing utilities

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react'
import { PredictionCard } from '@/components/prediction-card/PredictionCard.component'

describe('PredictionCard', () => {
  it('renders prediction details correctly', () => {
    const prediction = {
      match: 'Team A vs Team B',
      potentialScore: '2-1',
      // ... other prediction data
    }

    render(<PredictionCard prediction={prediction} />)
    expect(screen.getByText('Team A vs Team B')).toBeInTheDocument()
  })
})
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
