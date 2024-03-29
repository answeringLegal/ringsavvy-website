import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import Google from '../../assets/images/google-logo.svg';
import ArrowPrev from '../../assets/images/reviews-prev.svg';
import ArrowNext from '../../assets/images/reviews-next.svg';
import { Wrapper } from '../wrapper';
import * as Styled from './style';
import Modal from '../modal';

const Testimonials = ({ style }) => {
  const [reviewsData, setReviewsData] = useState([]);
  const [reviewComment, setReviewComment] = useState('');

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const ModalVisible = (r) => {
    setShowModal(true);
    setReviewComment(r);
  };
  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://api.reviews.io/merchant/latest?store=ring-savvy&apikey=9e7cd5031384c35c723c6d723aa915eb'
      );
      const { reviews } = await response.json();
      setReviewsData(reviews);
    })();
  }, []);

  function convertHTMLEntity(text) {
    const span = document.createElement('span');

    return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
      span.innerHTML = entity;
      return span.innerText;
    });
  }

  const [swiper, setSwiper] = useState(null);
  const params = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlidesBounds: true,
    breakpoints: {
      768: {
        spaceBetween: 100,
        slidesPerView: 'auto',
      },
    },
    on: {
      init(e) {
        setSwiper(e);
      },
    },
  };

  const testimonials = [
    {
      heading:
        'Ring Savvy goes beyond what other answering services will offer.',
      review:
        'Excellent service which allows me to be with my clients or in meetings while Ring Savvy operators pick up and request information that is either texted or emailed to me within minutes. Their service is always reliable and the information allows me to do my follow up when I’m not available.',
      author: {
        name: 'Todd Brickhouse',
        title: 'Brickhouse Design Group, Ltd.',
      },
    },
    {
      heading: 'Don’t think twice about hiring Ring Savvy, they are the one!',
      review:
        'Great answering service! You don’t realize how many business calls your actually missing from not having this service! Ring savvy taking over my business calls allowed me to triple my new clients! They are very polite, professional and knowledgeable. I instantly receive my messages after missing the call.',
      author: {
        name: 'Kristy Castagna',
        title: 'Lawyer',
      },
    },
    {
      heading: 'Stress less about missing a call with Ring Savvy.',
      review:
        'We have been using Ring Savvy for the past 3 years, for our OT/PT clients. Ring Savvy is professional and trustworthy. When we can’t answer our calls I know everything is being handled and don’t stress about missing anything because all of our clients are treated well!',
      author: {
        name: 'Christine Engel',
        title: 'Physical Therapist',
      },
    },
  ];
  console.log(showModal);

  return (
    <Styled.Slider>
      <Styled.GreenContainer />
      <Modal show={showModal} closeModal={closeModal}>
        <div style={{ width: '90%' }}>
          {reviewsData.length > 0 && convertHTMLEntity(reviewComment)}
        </div>
      </Modal>
      <Wrapper>
        <h2 style={{ maxWidth: '480px' }}>What our clients are saying</h2>
      </Wrapper>
      <Swiper {...params}>
        {reviewsData.length > 0 &&
          reviewsData.map((testimonial, i) => (
            <Styled.SliderItem key={i}>
              {/* <Modal show={showModal} closeModal={closeModal}>
                <div style={{ width: '90%' }}>
                  {reviewsData.length > 0 &&
                    convertHTMLEntity(testimonial.comments)}
                </div>
              </Modal> */}
              {/* <h4>{testimonial.heading}</h4> */}
              <Styled.Description marginTop={1}>
                {testimonial.comments.length > 280
                  ? convertHTMLEntity(testimonial.comments.substring(0, 280)) +
                    '...'
                  : convertHTMLEntity(testimonial.comments)}
                {/* {convertHTMLEntity(testimonial.comments)} */}
                {testimonial.comments.length >= 280 && (
                  <button
                    className='readMore-Button'
                    onClick={() => ModalVisible(testimonial.comments)}
                  >
                    Read more
                  </button>
                )}
              </Styled.Description>
              <Styled.Author>
                <Styled.AuthorName>
                  {testimonial.reviewer.first_name}
                </Styled.AuthorName>
                {/* <p>{testimonial.author.title}</p> */}
              </Styled.Author>
            </Styled.SliderItem>
          ))}
      </Swiper>
      <Wrapper>
        <Styled.Bottom>
          {/* TODO: Pull review data from Google API */}
          <Styled.GoogleReviews>
            <img src={Google} alt='Google Logo' />
            <p>
              <strong>4.5/5 stars</strong> based on 79 Google reviews
            </p>
          </Styled.GoogleReviews>
          <Styled.ArrowsWrapper>
            <img
              src={ArrowPrev}
              alt='Prev'
              onClick={() => swiper.slidePrev()}
            />
            <img
              src={ArrowNext}
              alt='Next'
              onClick={() => swiper.slideNext()}
            />
          </Styled.ArrowsWrapper>
        </Styled.Bottom>
      </Wrapper>
    </Styled.Slider>
  );
};

export default Testimonials;
