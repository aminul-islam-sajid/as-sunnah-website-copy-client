import React from 'react';
import Bg1StColor from '../reUse/Bg1StColor';
import Container from '../Container';
import { images } from '../../Images/Images';

const AboutText = () => {
    return (
        <Bg1StColor>
            <div>
                <Container>
                    <div className='lg:flex m-auto justify-around '>
                        <div className=''>
                            <img className='rounded-full xs:p-12 p-12' src={images.goldenIMG} alt="image" />
                        </div>
                        <div className='lg:w-7/12 pt-12'>
                            <h1 className='text-xl text-primaryColor'>আস-সুন্নাহ ফাউন্ডেশন</h1>
                            <hr className="border-t-3 border-gray-800 my-3" />
                            <p className='text-dark text-sm'>আস-সুন্নাহ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক শিক্ষা, দাওয়াহ ও পূর্ণত মানবকল্যাণে নিবেদিত সেবামূলক প্রতিষ্ঠান। এই প্রতিষ্ঠান মানবতার শিক্ষক, মানুষের মুক্তি ও শান্তির দূত, মানবসেবার আদর্শ, মহানবী মুহাম্মদ সা.-এর পদাঙ্ক অনুসরণ করে আর্তমানবতার সেবা, সমাজ সংস্কার, মহত্তম নীতিচেতনার সঞ্চার, কর্মসংস্থান তৈরি, দারিদ্র্য বিমোচন, ইসলামী তমদ্দুনের প্রসার, বহুমুখী শিক্ষায়ন প্রকল্প পরিচালনা, ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
                            <div className='mt-8 '>
                                <p className=''>o</p>
                                <hr />
                                <p className=''>o</p>
                                <hr />
                                <p className=''>o</p>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Bg1StColor>
    );
};

export default AboutText;