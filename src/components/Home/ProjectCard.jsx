import React from 'react';
import Bg1StColor from '../reUse/Bg1StColor';
import CardComponent from '../reUse/CardComponent';
import CardPrimary from '../reUse/CardPrimary';
import { images } from '../../Images/Images';

const ProjectCard = () => {
    return (
        <Bg1StColor>
            <CardComponent hadeLine='চলমান প্রজেক্ট'>
                <CardPrimary
                    title='পোস্ট গ্রাজুয়েট ডিপ্লোমা ইন ইসলামিক দাওয়াহ'
                    img={images.slide1}
                    subTitle='এটি আস-সুন্নাহ ফাউন্ডেশনের ‘আস-সুন্নাহ দাওয়াহ ও গবেষণা ইনস্টিটিউট’-এর একটি শিক্ষামূলক উদ্যোগ। জাতীয় ও আন্তর্জাতিক পর্যায়ে কাজের উপযোগী দাঈ তৈরি করা এই এই উদ্যোগের মূল উদ্দেশ্য।'
                />
                <CardPrimary
                    title='পোস্ট গ্রাজুয়েট ডিপ্লোমা ইন ইসলামিক দাওয়াহ'
                    img={images.slide1}
                    subTitle='এটি আস-সুন্নাহ ফাউন্ডেশনের ‘আস-সুন্নাহ দাওয়াহ ও গবেষণা ইনস্টিটিউট’-এর একটি শিক্ষামূলক উদ্যোগ। জাতীয় ও আন্তর্জাতিক পর্যায়ে কাজের উপযোগী দাঈ তৈরি করা এই এই উদ্যোগের মূল উদ্দেশ্য।'
                />
                <CardPrimary
                    title='পোস্ট গ্রাজুয়েট ডিপ্লোমা ইন ইসলামিক দাওয়াহ'
                    img={images.slide1}
                    subTitle='এটি আস-সুন্নাহ ফাউন্ডেশনের ‘আস-সুন্নাহ দাওয়াহ ও গবেষণা ইনস্টিটিউট’-এর একটি শিক্ষামূলক উদ্যোগ। জাতীয় ও আন্তর্জাতিক পর্যায়ে কাজের উপযোগী দাঈ তৈরি করা এই এই উদ্যোগের মূল উদ্দেশ্য।'
                />
                <CardPrimary
                    title='পোস্ট গ্রাজুয়েট ডিপ্লোমা ইন ইসলামিক দাওয়াহ'
                    img={images.slide1}
                    subTitle='এটি আস-সুন্নাহ ফাউন্ডেশনের ‘আস-সুন্নাহ দাওয়াহ ও গবেষণা ইনস্টিটিউট’-এর একটি শিক্ষামূলক উদ্যোগ। জাতীয় ও আন্তর্জাতিক পর্যায়ে কাজের উপযোগী দাঈ তৈরি করা এই এই উদ্যোগের মূল উদ্দেশ্য।'
                />
            </CardComponent>
        </Bg1StColor>

    );
};

export default ProjectCard;