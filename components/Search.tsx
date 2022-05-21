import React, { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';
import { IoSearchOutline } from 'react-icons/io5';

type Props = {
    type?: string
    placeHolderText?: string
}

const Search = ({type, placeHolderText}: Props) => {

    const [inputValue, setInputValue] = useState<string>('');
    const [isClearInputOpen, setIsClearInputOpen ] = useState<boolean>(false);

    const handleClearInputValue = () => {
        setInputValue('');
        setIsClearInputOpen(false);
    }

    return (
        <div className="flex items-center ">
            <div>
                <div className="flex flex-row text-xs font-medium group">
                    <div className="flex flex-row relative max-h-fit border items-center rounded overflow-y-hidden">
                        <div className="absolute border border-transparent top-1/2 -translate-y-2/4 translate-x-0 flex flex-row items-center justify-center left-0 h-9 w-8">
                            <IoSearchOutline />
                        </div>

						<label htmlFor="">
							<input
								name=""
								id=""
								type={type && type ? type : 'text'}
								className={`px-8 border-transparent focus:border-transparent 
                                    focus:ring-0 px-5 h-10 text-sm w-7 border-transparent focus:border-transparent
                                    focus:ring-0 transition-all delay-150 group-hover:w-48 group-hover:px-8`
                                }
								placeholder={placeHolderText}
								onChange={(e) => {

                                    const event = e.target.value.trim().toLowerCase()

                                    if (event === '' || event.length < 1) {
                                        setIsClearInputOpen(false);
                                    }
                                    else {
                                        setIsClearInputOpen(true);
                                    }

                                    setInputValue(e?.target?.value);
                                }}
								value={inputValue}
							/>
						</label>

						<div
                            className={`absolute top-1/2 -translate-y-2/4 translate-x-0 flex flex-row items-center justify-center right-0 h-9 w-8 ${
                                isClearInputOpen
                                ? 'visible animate-scaleComment'
                                : 'invisible'
                            }`}
						>
                            <button
                                onClick={handleClearInputValue}
                                aria-label="Clear"
                                type="button"
                                className="relative border-none p-0 outline-none border-0"
                            >

                                <ImCancelCircle />
                            </button>
						</div>
					</div>
                </div>
            </div>
        </div>

    )
}

export default Search