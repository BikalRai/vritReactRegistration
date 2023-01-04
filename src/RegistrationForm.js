import React, { useEffect, useState } from 'react';
import Date from './Date';
import DateDay from './DateDay';
import DateYear from './DateYear';

const RegistrationForm = () => {
    const [stdInfo, setStdInfo] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthMonth: '',
        birthDay: '',
        birthYear: '',
        gender: '',
        addOne: '',
        addTwo: '',
        city: '',
        postal: '',
        email: '',
        mobile: '',
        phoneNumber: '',
        workNumber: '',
        company: '',
        course: '',
        comment: '',
    });

    const [error, setError] = useState(false);

    const {
        firstName,
        middleName,
        lastName,
        birthMonth,
        birthDay,
        birthYear,
        gender,
        addOne,
        addTwo,
        city,
        postal,
        email,
        mobile,
        phoneNumber,
        workNumber,
        company,
        course,
        comment,
    } = stdInfo;

    // first name handler
    const firstNameHandle = ({ target: { value } }) => {
        //setting value of first name
        setStdInfo({ ...stdInfo, firstName: value });
        console.log(stdInfo.firstName);
    };

    // middle name handler
    const middleNameHandle = ({ target: { value } }) => {
        //setting value of middle name
        setStdInfo({ ...stdInfo, middleName: value });
        console.log(stdInfo.middleName);
    };

    // middle name handler
    const lastNameHandle = ({ target: { value } }) => {
        //setting value of last name
        setStdInfo({ ...stdInfo, lastName: value });
        console.log(stdInfo.lastName);
    };

    // month handler
    const handleMonth = ({ target: { value } }) => {
        // console.log(value);
        setStdInfo({ ...stdInfo, birthMonth: value });
    };

    // Day handler
    const handleDay = ({ prev, target: { value } }) => {
        // console.log(value);
        setStdInfo({ ...stdInfo, birthDay: value });
    };

    // Year handler
    const handleYear = ({ target: { value } }) => {
        // console.log(value);
        setStdInfo({ ...stdInfo, birthYear: value });
    };

    // gender handler
    const genderPick = ({ target: { value } }) => {
        // console.log(value);
        setStdInfo({ ...stdInfo, gender: value });
    };

    // addOne handler
    const addressOneHandle = ({ target: { value } }) => {
        // console.log(value);
        setStdInfo({ ...stdInfo, addOne: value });
    };

    //addTwo handler
    const addressTwoHandle = ({ target: { value } }) => {
        // console.log(value);
        setStdInfo({ ...stdInfo, addTwo: value });
    };

    // city handler
    const cityHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, city: value });
    };

    //postal handler
    const postalHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, postal: value });
    };

    // email handle
    const emailHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, email: value });
    };

    // mobile handle
    const mobileHandle = ({ prev, target: { value } }) => {
        setStdInfo({ ...stdInfo, mobile: value });
    };

    // phone handle
    const phoneNumberHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, phoneNumber: value });
    };

    // work number handle
    const workNumberHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, workNumber: value });
    };

    // company handle
    const companyHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, company: value });
    };

    // courses handle
    const courseHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, course: value });
    };

    // comment handle
    const commentHandle = ({ target: { value } }) => {
        setStdInfo({ ...stdInfo, comment: value });
    };

    console.log(
        firstName,
        middleName,
        lastName,
        birthMonth,
        birthDay,
        birthYear,
        gender,
        addOne,
        addTwo,
        city,
        postal,
        email,
        mobile,
        phoneNumber,
        workNumber,
        company,
        course,
        comment
    );

    // submit handle
    const submitHandle = (e) => {
        e.preventDefault();

        if (firstName === '' && lastName === '') {
            setError(true);
        } else if (
            birthMonth === '' &&
            birthDay === '' &&
            birthYear === '' &&
            gender === ''
        ) {
            setError(true);
        } else if (addOne === '' && city === '') {
            setError(true);
        } else if (email === '' && mobile === '') {
            setError(true);
        } else if (course === '') {
            setError(true);
        } else {
            alert('Congratulations on registering!');
            setError(false);
        }
    };

    const errMsg = () => <span>Field must not be empty</span>;

    useEffect(() => {
        console.log('Effect');
    }, []);
    return (
        <>
            <form>
                <h1>Registration Form</h1>
                <p>Fill out the form carefully for registration</p>
                <div className="header">
                    <h3>Student Name</h3>
                    <div className="student-name">
                        <div className="first-name">
                            <input
                                type="text"
                                onChange={firstNameHandle}
                                value={firstName}
                            />
                            <label>First Name</label>
                            {error && firstName === '' && errMsg()}
                        </div>
                        <div className="mid-name">
                            <input
                                type="text"
                                onChange={middleNameHandle}
                                value={middleName}
                            />
                            <label>Middle Name</label>
                        </div>
                        <div className="last-name">
                            <input
                                type="text"
                                onChange={lastNameHandle}
                                value={lastName}
                            />
                            <label>Last Name</label>
                            {error && lastName === '' && errMsg()}
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <h3>Birth Date</h3>
                    <div className="birth-gender">
                        <div className="month">
                            <select
                                name=""
                                id=""
                                onChange={handleMonth}
                                value={birthMonth}
                            >
                                <option value=""></option>
                                <Date />
                            </select>
                            <label>Month</label>
                            {error && birthMonth === '' && errMsg()}
                        </div>
                        <div className="day">
                            <select
                                name=""
                                id=""
                                onChange={handleDay}
                                value={birthDay}
                            >
                                <option value=""></option>
                                <DateDay />
                            </select>
                            <label>Day</label>
                            {error && birthDay === '' && errMsg()}
                        </div>
                        <div className="year">
                            <select
                                name=""
                                id=""
                                onChange={handleYear}
                                value={birthYear}
                            >
                                <option value=""></option>
                                <DateYear />
                            </select>
                            <label>Year</label>
                            {error && birthYear === '' && errMsg()}
                        </div>
                        <div className="gender">
                            <select
                                name=""
                                id=""
                                value={gender}
                                onChange={genderPick}
                            >
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <label>Gender</label>
                            {error && gender === '' && errMsg()}
                        </div>
                    </div>
                </div>
                <div className="address">
                    <div className="strt-add">
                        <input
                            type="address"
                            onChange={addressOneHandle}
                            value={addOne}
                        />
                        <label>Street Address</label>
                        {error && addOne === '' && errMsg()}
                    </div>
                    <div className="strt-add-line-two">
                        <input
                            type="address"
                            onChange={addressTwoHandle}
                            value={addTwo}
                        />
                        <label>Street Address Line 2</label>
                    </div>
                    <div className="city">
                        <input
                            type="address"
                            onChange={cityHandle}
                            value={city}
                        />
                        <label>City</label>
                        {error && city === '' && errMsg()}
                    </div>
                    <div className="postal">
                        <input
                            type="postal"
                            onChange={postalHandle}
                            value={postal}
                        />
                        <label>Postal / Zip Code</label>
                    </div>
                </div>
                <div className="contact">
                    <div className="row">
                        <div className="col">
                            <h3>Student E-mail</h3>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="ex: myname@example.com"
                                onChange={emailHandle}
                                value={email}
                            />
                            <label>example@example.com</label>
                            {error && email === '' && errMsg()}
                        </div>
                        <div className="col">
                            <h3>Mobile Number</h3>
                            <input
                                type="phone"
                                placeholder="(000) 000-0000"
                                onChange={mobileHandle}
                                value={mobile}
                            />
                            {error && mobile === '' && errMsg()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Phone Number</h3>
                            <input
                                type="phone"
                                placeholder="(000) 000-0000"
                                onChange={phoneNumberHandle}
                                value={phoneNumber}
                            />
                        </div>
                        <div className="col">
                            <h3>Work Number</h3>
                            <input
                                type="phone"
                                placeholder="(000) 000-0000"
                                onChange={workNumberHandle}
                                value={workNumber}
                            />
                        </div>
                    </div>
                </div>
                <div className="co-name">
                    <h3>Company</h3>
                    <input
                        type="text"
                        onChange={companyHandle}
                        value={company}
                    />
                </div>
                <div className="courses">
                    <h3>Courses</h3>
                    <select
                        name=""
                        id=""
                        onChange={courseHandle}
                        value={course}
                    >
                        <option value=""></option>
                        <option value="Python">Python</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Ruby">Ruby</option>
                    </select>
                    {error && course === '' && errMsg()}
                </div>
                <div className="comment">
                    <h3>Additional Comments</h3>
                    <textarea
                        onChange={commentHandle}
                        value={comment}
                    ></textarea>
                </div>
                <button onClick={submitHandle}>Submit</button>
            </form>
        </>
    );
};

export default RegistrationForm;
