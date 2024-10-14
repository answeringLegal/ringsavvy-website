import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SecondaryContent from '../components/secondaryContent';

export default function EmploymentOpportunities({ location }) {
  const heroData = {
    heading: 'Employment Opportunities',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Employment Opportunities - Ring Savvy - Apply For A Position Here
        </title>
        <meta
          name='description'
          content='Employment Opportunities - Ring Savvy - Apply For A Position Here - Join Our Team and Be a Part of the Best Answering Service!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      {/*    <SecondaryContent maxWidth='780px'>
        <h2>Start your career with an answering service industry leader!</h2>

        <p>
          Those seeking full time employment at Ring Savvy/Answering Legal have
          the opportunity to gain experience as a receptionist. Our
          receptionists answer calls as if they were in that particular
          business’ office, and are that business’ “personal” receptionist, just
          for that call. Our call center operates 24 hours a day, 7 days a week,
          365 days a year, and our corporate location is in Nesconset, NY.
        </p>

        <p>
          Our full time shifts are typically 35-40 hours per week, depending on
          the call center’s needs. Receptionists do not work less than 20 hours
          per week. We of course, accommodate the timing and scheduling needs of
          our receptionists, however we do ask for flexibility in return. Having
          an open schedule and determining the available shift hours you can
          work does not guarantee an applicant a position, however flexibility
          in the schedule will of course increase the propensity that an
          applicant receives a position.
        </p>

        <p>
          These positions offer great starting pay and room for advancement
          within the company, and almost all of our higher-ups came from the
          receptionist position.
        </p>

        <p>
          You must have a typing speed of 50 words per minute. If you do not
          know your typing speed, please visit{' '}
          <a href='https://www.typingtest.com/' rel='nofollow'>
            www.typingtest.com
          </a>{' '}
          to see how you do.
        </p>

        <p>
          If you’re interested in a receptionist position with Ring
          Savvy/Answering Legal, please feel free to give us a call at the
          number below.
        </p>

        <h2>631-892-2004</h2>

        <h3>Career</h3>

        <ul>
          <li>Promote from within</li>
          <li>Telephone Operator</li>
          <li>Senior Telephone Operator</li>
          <li>Supervisor</li>
          <li>Customer Solution Specialist</li>
          <li>Back Office Specialist</li>
          <li>Sales Assistant</li>
          <li>Web Content Writer</li>
          <li>Web Designer</li>
          <li>Cold Caller</li>
          <li>Salesman</li>
        </ul>

        <h3>Workplace</h3>

        <ul>
          <li>Annual Holiday Party</li>
          <li>Birthday Gift card</li>
          <li>Employees of the Month (cash bonus)</li>
          <li>Set Schedules</li>
          <li>Perfect Attendance Bonus</li>
          <li>Bagel Fridays</li>
          <li>Discounted Gym Membership (New York Sports Club)</li>
          <li>Multicultural Day</li>
          <li>Themed Attire Days (last friday of every month)</li>
          <li>Pocketbook and Jewelry Parties</li>
          <li>
            Secure facility with keyless entry door swipes and 24/7 CCTV
            monitoring
          </li>
        </ul>

        <h3>Benefits</h3>

        <ul>
          <li>
            Health/Prescription/Dental/Life/Vision/Supplemental insurances:
            Disability, Hospital, Accident, Cancer
          </li>
          <li>Paid time off (PTO)</li>
          <li>
            2 weeks paid leave after 90 day probationary period and up to 3rd
            year.
          </li>
          <li>3 weeks paid leave after 3 – 5 years</li>
          <li>4 weeks paid leave after 5 plus years</li>
        </ul>
      </SecondaryContent> */}
      <SecondaryContent maxWidth='780px'>
        <h2>Job Description</h2>

        <p>
          As a Virtual Receptionist, job duties include answering incoming calls
          for law offices and other businesses with a polite and professional
          demeanor. The objective is to provide customer service to callers by
          taking messages and relaying them appropriately in a timely manner.
        </p>

        <h3>Required Skills:</h3>

        <ul>
          <li>Typing: 45+ WPM</li>
          <li>Interpersonal Skills</li>
          <li>Oral and Written Communication Skills</li>
          <li>Reading Skills</li>
          <li>Customer Relations</li>
          <li>Customer Service</li>
          <li>Professionalism</li>
          <li>Organization</li>
          <li>Time Management</li>
          <li>Computer Literacy</li>
          <li>Telephone Etiquette</li>
        </ul>
        <p>
          <strong> Addittional Skills:</strong> Bilingual Spanish/English a plus,
          but not required.
        </p>

        <p><strong> Hours: </strong>
          We are a 24/7/365 company. We are currently looking for full time
          availability.
        </p>

        <p>
          <strong>Experience:</strong> No call center experience required.
          Willing to train appropriate candidates.
        </p>

        <p>
          <strong>Compensation:</strong> Hourly; Beginning at $16-$17 an hour
        </p>

        <p>
          <strong>Job Types:</strong> Full-time
        </p>

        <p>
          <strong>Benefits:</strong> Monthly contests with the ability to win
          prizes and gift cards to local restaurants and stores, major medical,
          accrued paid time off, and Employee Assistance Program.
        </p>

        <p>
          <strong>Equipment:</strong> Must have fast speed internet connection,
          computer or laptop, and access to a router with an open port.
        </p>

        <p>
          {' '}
          <strong>*Please submit resume for consideration*</strong>
        </p>

        <p>Job Types: Full-time, Part-time</p>

        <p>Pay: $16.00 - $17.00 per hour</p>

        <p>Expected Hours: 20 – 40 per week</p>

        <h3>Benefits:</h3>

        <ul>
          <li>401(k)</li>
          <li>401(k) matching</li>
          <li>Dental insurance</li>
          <li>Employee assistance program</li>
          <li>Flexible schedule</li>
          <li>Health insurance</li>
          <li>Health savings account</li>
          <li>Paid time off</li>
          <li>Referral program</li>
          <li>Vision insurance</li>
        </ul>

        <h3>Schedule:</h3>

        <ul>
          <li>8 hour shift</li>
          <li>Day shift</li>
          <li>Monday to Friday</li>
          <li>Night shift</li>
          <li>Weekends as needed</li>
        </ul>

        <h3>Location:</h3>
        <ul>
          <li>Florida</li>
          <li>North Carolina</li>
        </ul>
      </SecondaryContent>
    </Layout>
  );
}
