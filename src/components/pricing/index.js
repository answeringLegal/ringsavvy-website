import React, { useState } from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import { FlexRow } from '../globals';
import PricingPlan from '../pricingPlan';
import PricingTable from '../pricingTable';

const Pricing = () => {
  const planDisplay = [
    {
      id: 1,
      name: 'Small',
      minutes: '50',
      price: '$3.91/min',
      features: [
        'Every premium feature we offer',
        '24/7 live support',
        '24 hour bilingual receptionist',
      ],
      description:
        'Great for small businesses who want to keep overhead costs low.',
    },
    {
      id: 2,
      name: 'Medium',
      minutes: '100',
      price: '$3.30/min',
      features: [
        'Every premium feature we offer',
        '24/7 live support',
        '24 hour bilingual receptionist',
      ],
      description:
        'Great for growing businesses that require a little extra phone support.',
    },
    {
      id: 3,
      name: 'Custom',
      features: [
        'A minute package specific to your business needs',
        '24/7 live support',
        '24 hour bilingual receptionist',
      ],
      description:
        'Great for businesses that expect to either use a lot of minutes, or need help figuring out how many minutes they’ll need.',
      ctaText: 'Get My Quote',
      ctaLink: '/get-a-quote/',
    },
  ];

  const tableData = [
    {
      id: 1,
      minutes: '50',
      price: '$3.91/min',
    },
    {
      id: 2,
      minutes: '75',
      price: '$3.89/min',
    },
    {
      id: 3,
      minutes: '100',
      price: '$3.30/min',
    },
    {
      id: 4,
      minutes: '150',
      price: '$3.19/min',
    },
    {
      id: 5,
      minutes: '200',
      price: '$3.08/min',
    },
    {
      id: 6,
      minutes: '250',
      price: '$2.95/min',
    },
    {
      id: 7,
      minutes: '300',
      price: '$2.82/min',
    },
    {
      id: 8,
      minutes: '350',
      price: '$2.70/min',
    },
    {
      id: 9,
      minutes: '400',
      price: '$2.48/min',
    },
    {
      id: 10,
      minutes: '450',
      price: '$2.42/min',
    },
    {
      id: 11,
      minutes: '500',
      price: '$2.37/min',
    },
    {
      id: 12,
      minutes: '600 - 1,500',
      price: '$2.30/min',
    },
    {
      id: 13,
      minutes: '1,500 - 20,000',
      price: '$2.25/min',
    },
  ];

  const small = planDisplay.find((data) => data.id === 1);
  const medium = planDisplay.find((data) => data.id === 2);
  const custom = planDisplay.find((data) => data.id === 3);

  return (
    <Section>
      <Wrapper>
        <FlexRow style={{ marginTop: '-80px' }}>
          <PricingPlan plan={small} position='left' />
          <PricingPlan plan={medium} position='center' />
          <PricingPlan plan={custom} position='right' />
        </FlexRow>
        <PricingTable tableData={tableData} />
      </Wrapper>
    </Section>
  );
};

export default Pricing;
