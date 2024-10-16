import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { Section } from '../components/section';
import { Wrapper } from '../components/wrapper';
import Faq from '../components/faq';
import { Aside, IndexTitle, Category } from '../components/faq/style';
import { ContentContainer, BaseUnorderedList } from '../components/globals';

// TODO: Refactor when possible. Move constants to sep file, etc.
export default function FAQ({ location }) {
  const heroData = {
    heading: 'Frequently Asked Questions',
  };

  const ourCompany = [
    {
      question: 'Where is Ring Savvy located?',
      answer:
        'Our main offices and call center are located at 120 Lake Avenue S, Suite 11, Nesconset, New York, 11767.',
    },
    {
      question: 'How long has Ring Savvy been in business?',
      answer:
        'Ring Savvy has been answering phone calls on behalf of businesses since 2013.',
    },
    {
      question: 'Is Ring Savvy a franchise?',
      answer:
        'No, we’re an individually owned company, run out of a single location in Nesconset, New York.',
    },
    {
      question: 'Does Ring Savvy answer calls 24/7?',
      answer:
        'Yes. Our call center remains active in answering phone calls 24 hours a day, seven days a week, 365 days a year (366 during leap years).',
    },
    {
      question:
        'How often does Ring Savvy’s call center experience technical issues?',
      answer:
        'In the rare event that technical issues do arise, we’re typically able to resolve them in a matter of minutes. Our service also never experiences outages. Ring Savvy has multiple backup generators and failsafes in place to keep us up and running during storms.',
    },
    {
      question:
        'Why would I use a live answering service when I have voicemail?',
      answer:
        'Ring Savvy provides businesses with 24/7/365 live phone answering coverage, and ensures that their customers never have to deal with the frustration of being sent to voicemail during their time of need. We help companies in all industries turn more of their new leads into paying customers, by providing their callers a live, caring and knowledgeable voice.',
    },
    {
      question: 'Why would I use a live answering service when I have staff?',
      answer:
        'Ring Savvy provides support on the 3rd and 4th ring when your office fails to answer a call. This is great insurance for any business, as your in-office staff may not always be able to pick up a call during the day, and will very rarely be available to answer calls during after hours, weekends, and holidays. Ring Savvy can help you on a rollover basis by answering only the calls that you miss, giving you the ability to capture new business at a fraction of the cost!',
    },
  ];

  const howItWorks = [
    {
      question: 'How does Ring Savvy work?',
      answer:
        'Ring Savvy uses conditional call forwarding in order to answer calls that you and your staff can’t get to. This means that 24/7, Ring Savvy is available to field calls on behalf of your business. Every phone call will ring 3-4 times in your office, and, if unanswered, the call forwards over to our service. If you would like to call forward your calls with no delay, Ring Savvy can easily accommodate as well.',
    },
    {
      question:
        'How is Ring Savvy different than getting a message from my voicemail?',
      answer:
        'When using Ring Savvy, you’ll always be giving your callers a live trained receptionist to speak with. Our receptionist can make your customers feel cared for, answer any basic questions they might have about your business, and work to get the customer in touch with you right away. A voicemail machine cannot do any of this.',
    },
    {
      question: 'How do I forward my calls to Ring Savvy?',
      answer:
        'When signing up with Ring Savvy, one of the first things you’ll do is let us know exactly how you’d like us to handle and direct your business’ incoming calls. To learn about the many call forwarding options you have with our service, we recommend checking out this page.',
    },
    {
      question: 'How are my calls answered?',
      answer:
        'The way that our virtual receptionists answer your phone calls is entirely up to you, although our most preferred greetings usually sound like, “Good morning, you’ve reach (insert name of business), how may I help you?” This is a brief, polite way to exert professionalism and let the caller know that the person answering the phone is a part of your business.',
    },
    {
      question:
        'If I am on a call and another call is coming in, will it go to Ring Savvy?',
      answer:
        'Yes. Conditional call forwarding from Ring Savvy gives you the option to utilize call waiting or let the call ring and forward it over to our service to be answered by one of our trained virtual receptionists.',
    },
    {
      question:
        'Can I still answer my own phone calls even though I have Ring Savvy?',
      answer:
        'Yes. Unless you specifically request all of your incoming calls to be immediately directed to our service (a request that might be useful during after hours, weekend or vacation time), your office will always be given an opportunity to answer incoming calls first.',
    },
    {
      question:
        'Can I forward all of my calls to Ring Savvy so that I don’t have to answer my own phone?',
      answer:
        'Yes. Utilizing our straight call forwarding protocol will send all of your inbound calls to our answering service. You can turn straight call forwarding on and off whenever you’d like.',
    },
  ];

  const virtualReceptionists = [
    {
      question: 'Where are Ring Savvy’s operators located?',
      answer:
        'All of our operators work out of our call center in Nesconset, New York.',
    },
    {
      question: 'Does Ring Savvy outsource their calls to different countries?',
      answer:
        'Ring Savvy never outsources calls. All of our calls are answered by receptionists that are working inside of our call center facility.',
    },
    {
      question: 'Does Ring Savvy offer fully bilingual receptionists?',
      answer:
        'Yes! Ring Savvy employs both English and Spanish speaking receptionists. We always have bilingual receptionists working and ready to answer calls on behalf of all the businesses we serve.',
    },
  ];

  const services = [
    {
      question:
        'Can I customize the information that I receive in my messages?',
      answer:
        'Absolutely. Just let our support team know what information you’d like our virtual receptionists to gather and passing along to you via message. To reach our support team, simply submit a support ticket here or give us a call at 631-363-1000!',
    },
    {
      question: 'Does Ring Savvy schedule appointments?',
      answer:
        'Yes. Appointment scheduling is an optional Ring Savvy service, available upon request.',
    },
    {
      question: 'Does Ring Savvy handle new customer intake?',
      answer:
        'We do. Once our virtual receptionist identifies someone as a first time caller to your business, they will begin asking them intake questions, that have been approved by you and customized to your business’ liking.',
    },
    {
      question:
        'Can Ring Savvy send messages to multiple people at my company?',
      answer:
        'Yes! Our virtual receptionist team is available to pick up the phone and take messages from your callers at any time, and once they are finished transcribing a new message from a caller, they can send that message to any staff members you’d like.',
    },
    {
      question: 'Can Ring Savvy transfer potential new customer callers to me?',
      answer:
        'Absolutely. When a Ring Savvy virtual receptionist answers one of your calls, we can attempt to contact you, and give you the option to have the call transferred over to a direct line of your choosing.',
    },
  ];

  const freeTrial = [
    {
      question: 'How do I start my free trial?',
      answer:
        'Fill out a form on our sign-up page or call us now at 631-363-1000. If you fill out a form, you’ll be contacted by one of our Savvy customer support managers shortly. If you decide to call in, we’ll always have a live person for you to speak with.',
    },
    {
      question: 'Can I use all of Ring Savvy’s features during the free trial?',
      answer:
        'During your free trial period, you’ll have access to just about all of our features, allowing you to take in the full Ring Savvy experience. The only feature we don’t offer to those in trial is appointment scheduling. ',
    },
    {
      question: 'How much does the free trial cost?',
      answer:
        'Our trial is absolutely free. We promise we won’t charge you a penny for the first 10 days you use our service.',
    },
    {
      question: 'What happens during my free trial?',
      answer:
        'During your free trial, our virtual receptionist team will be available 24/7 to handle your incoming calls, following all of the directions you give us during the setup process. You’ll get 10 days to see if our service is beneficial to your business, and make sure that everything is working properly.',
    },
    {
      question: 'Can I make changes to my account during the free trial?',
      answer:
        'Absolutely. You can always make changes to your account on the fly. Just submit a support ticket here or give us a call at 631-363-1000.',
    },
    {
      question: 'What happens at the end of my free trial?',
      answer:
        'A member of our team will reach out to you and go over the results of your trial period. If you’d like to continue using our service, we’ll get you started right away as a paying customer. If you decide the service is not for you, you can walk away at no cost.',
    },
  ];

  const troubleshooting = [
    {
      question: 'What if I work off of a landline and a cell phone?',
      answer:
        'You have nothing to worry about. We can forward calls from both your landline and your cell phone to the same dedicated telephone number in our system. When calls come through on that line, our team will know that they came from your phone.',
    },
    {
      question: 'What if I have multiple business locations?',
      answer:
        'Not a problem. We can answer calls on behalf of all your businesses and even help customers trying to find your office! Utilizing call forwarding, we can easily determine which office your callers are attempting to visit.',
    },
    {
      question: 'How do I make adjustments to my account?',
      answer:
        'Simple! Just submit a support ticket here or give us a call at 631-363-1000! Customer support is available 24/7/365.',
    },
    {
      question: 'Can I change how my calls are answered?',
      answer:
        'Yes. Your greetings and protocol are always customizable, and can be changed instantly when you call in. Simply, submit a support ticket here or give us a call at 631-363-1000, and let us know how you would like your calls handled going forward.',
    },
    {
      question: 'My landline calls are not being picked up at all!',
      answer:
        'This could be because your phone provider has dropped your call forwarding feature. This sometimes happens when your phone provider experiences outages, or upgrades their system. This also happens when you add/remove features from your account. In order to reactivate service, our customer success team will place a ticket with your carrier or log into your portal. This change may be instantaneous or may take up to 48 hours.',
    },
    {
      question: 'My cell phone calls are not being picked up at all!',
      answer:
        'If you’ve changed/upgraded your cell phone, your call forwarding may no longer be active. You must enter a code and your dedicated ten digit phone number to reactivate your service. This code depends on your phone carrier. Here are some of our quick tutorials on forwarding your cell phone to Ring Savvy.',
    },
    {
      question:
        'My cell phone rings too many times before Ring Savvy picks up the call! What is wrong?',
      answer:
        'This may have been caused by an update your cell phone provider has implemented, but the default amount of rings on a cell phone before forwarding is 6. If attempts to decrease the amount of rings is unsuccessful, dialing 611 from the cell phone and speaking to a representative usually helps. If a representative claims they can not make this fix, ask for a supervisor.',
    },
    {
      question:
        'My landline rings too many times before Ring Savvy picks up the call! What is wrong?',
      answer:
        'Normally, this is an issue with your phone provider. Just let us know that you are hearing too many rings before the calls are answered and we still start running diagnostics on your lines. We will also get in contact with your provider to remedy the issue. Depending on your phone provider, this can be an instant fix or can take up to 48 hours.',
    },
    {
      question: 'I’m receiving voicemails, are my calls not forwarding?',
      answer:
        'Normally, this is an issue with your phone provider. Our technical support will run diagnostics on your line and contact your provider to reinstate your call forwarding features.',
    },
    {
      question:
        'Where can I find the caller ID for all patched and missed calls?',
      answer:
        'The caller ID of the person who called is automatically attached at the bottom of every email that is sent to you from the answering service. The number that the person leaves as a callback number is always sent to you via text as well.',
    },
  ];

  const [isActive, setActive] = useState(ourCompany);
  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Ring Savvy | Frequently Asked Questions | Answering Service FAQs
        </title>
        <meta
          name='description'
          content='Ring Savvy | Frequently Asked Questions | Answering Service FAQs | Contact Our Support Team For Personal Account Questions.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <Section>
        <Wrapper flex>
          <Aside>
            <IndexTitle>Categories</IndexTitle>
            <BaseUnorderedList>
              <Category onClick={() => setActive(ourCompany)}>
                Our Company
              </Category>
              <Category onClick={() => setActive(howItWorks)}>
                How It Works
              </Category>
              <Category onClick={() => setActive(virtualReceptionists)}>
                Virtual Receptionists
              </Category>
              <Category onClick={() => setActive(services)}>Services</Category>
              <Category onClick={() => setActive(freeTrial)}>
                Free Trial
              </Category>
              <Category onClick={() => setActive(troubleshooting)}>
                Troubleshooting
              </Category>
            </BaseUnorderedList>
          </Aside>
          <ContentContainer maxWidth='680px'>
            {isActive.map((faq, index) => (
              <Faq faq={faq} key={index} />
            ))}
          </ContentContainer>
        </Wrapper>
      </Section>
    </Layout>
  );
}
