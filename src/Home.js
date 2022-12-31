import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Home() {
    // Task-1
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // Task-2
    const [word, setWord] = useState("");
    const [palindrome, setPalindrome] = useState(true);

    useEffect(() => {
        if (word === word.split("").reverse().join("")) {
            setPalindrome(true);
        }
        else {
            setPalindrome(false);
        };
    }, [word]);

    // Task-3
    function sum(x) {
        return function (y) {
            return x + y;
        };
    }

    // Task-4
    function parent() {
        let variable1 = 6;  // Variable declared outside the scope of child() function.

        function child() {
            return variable1;  // Outside scope variable.
        }

        return child()
    }

    // Task-5
    function mutation() {
        const var1 = { value: 'ABC' };
        const var2 = var1;

        var2.value = 'DEF';  // Changing value of var2.
        return var1.value;  // Value of var1 changed.
    }

    function hoisting() {
        x = 3;
        let y = x + 6;  // x used before declaration.
        var x;  // Declaring x after usage.
        return y;
    }

    // Task-6
    const [result, setResult] = useState("");

    function greetUser() {
        return new Promise((resolve,) => {
            setTimeout(() => { resolve("Hello User!!") }, 3000)
        })
    }

    useEffect(() => {
        async function callingGreetUser() {
            const value = await greetUser();

            setResult(value);
        }

        callingGreetUser()
    }, [])

    // Task-8
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptEmail, setAcceptEmail] = useState(false);
    const [number, setNumber] = useState();
    const [acceptNum, setAcceptNum] = useState(false);

    useEffect(() => {
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var numberRegex = /^([0-9-+]).{9,13}$/g;

        if (emailRegex.test(email)) {
            setAcceptEmail(true);
        }
        else {
            setAcceptEmail(false);
        }

        if (numberRegex.test(number)) {
            setAcceptNum(true);
        }
        else {
            setAcceptNum(false);
        }
    }, [email, number])


    return (
        <header className="App-header">
            <div>
                <h2>Task-1: Filter Function</h2>
                <p>Original array: [1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
                <p>Elements divisible by 3:</p>
                {arr1.filter(element => element % 3 === 0).map(filteredElements => (
                    <li key={filteredElements.toString()}>
                        {filteredElements}
                    </li>
                ))}
            </div>

            <div>
                <h2>Task-2: Palindrome or not</h2>
                <div>
                    <p>Input Word:</p>
                    <input value={word} onChange={(e) => setWord(e.target.value)} />
                </div>
                <p>Palindrome:{palindrome ? " Yes" : " No"}</p>
            </div>

            <div>
                <h2>Task-3: Addition of numbers</h2>
                <p>Sum of 20 and 10 = {sum(20)(10)}</p>
            </div>

            <div>
                <h2>Task-4: Closure Example</h2>
                <p>The variable value declared outside the context is: {parent()}</p>
            </div>

            <div>
                <h2>Task-5: Mutation and function hoisting</h2>
                <u>Mutation</u>
                <p>Initial value of var1: ABC</p>
                <p>Value of var1 after mutation: {mutation()}</p>
                <br />
                <u>Hoisting</u>
                <p>Value of y (uses value of x before it is declared): {hoisting()}</p>
            </div>

            <div>
                <h2>Task-6: UseEffect using async/await</h2>
                <p>Value from the greetUser from the useEffect hook: <b>{result}</b></p>
            </div>

            <div>
                <h2>Task-7: </h2>
                <Link to='/quiz'>
                    <h3>Quiz App</h3>
                </Link>
            </div>

            <div>
                <h2>Task-8: User Input Validation</h2>
                <h3><u>Name</u></h3>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                {name ? <></> : <p>* Name is mandatory.</p>}
                <h3><u>Email</u></h3>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                {acceptEmail ? <p>Accepted</p> : <p>* Non-acceptable Email</p>}
                <h3><u>Mobile Number</u></h3>
                <input value={number} onChange={(e) => setNumber(e.target.value)} />
                {acceptNum ? <p>Accepted</p> : <p>* Non-acceptable Number</p>}
            </div>
        </header>
    )
}
