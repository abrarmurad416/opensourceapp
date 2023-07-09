"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = false;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        };
        setProviders();
    }, []);

    return (
        <nav className="flex justify-between w-full mb-16 pt-3">
            <div className="flex items-center">
                <Link href="/" className="flex gap-2 items-center">
                    <Image
                        src="/assets/images/logo.svg"
                        alt="logo"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                    <p className="logo_text">Promptopia</p>
                </Link>
            </div>
            <div className="flex items-center">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src="/assets/images/profile.png"
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
};

export default Nav;
