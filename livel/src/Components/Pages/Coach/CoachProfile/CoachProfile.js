import React, { useState } from 'react'

import './CoachProfile.css'

import Header from '../../../Header'

let ALUNO_INFO = {
    rate: 4.5,
}

export default function CoachProfile() {
    const [virgula, setvirgula] = useState(false);
    const [path, setPath] = useState(() => {
        if (ALUNO_INFO.rate == 0) {
            setvirgula(true);
            return {
                star1path: '/images/star_gray.png',
                star2path: '/images/star_gray.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
                
            }
        }
        else if (ALUNO_INFO.rate == 1) {
            setvirgula(true);
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_gray.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
                
            }
        }
        else if (ALUNO_INFO.rate == 2) {
            setvirgula(true);
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
                
            }
        }
        else if (ALUNO_INFO.rate == 3) {
            setvirgula(true);
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
                
            }
        }
        else if (ALUNO_INFO.rate == 4) {
            setvirgula(true);
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_full.png',
                star5path: '/images/star_gray.png',
                
            }
        }
        else if (ALUNO_INFO.rate == 5) {
            setvirgula(true);
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_full.png',
                star5path: '/images/star_full.png',
                
            }
        }
        else if (ALUNO_INFO.rate < 5 && ALUNO_INFO.rate > 4) {
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/star_full.png',
                star5path: '/images/semi_star.png',
            }
        }
        else if (ALUNO_INFO.rate < 4 && ALUNO_INFO.rate > 3) {
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/star_full.png',
                star4path: '/images/semi_star.png',
                star5path: '/images/star_gray.png',
            }
        }
        else if (ALUNO_INFO.rate < 3 && ALUNO_INFO.rate > 2) {
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/star_full.png',
                star3path: '/images/semi_star.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
            }
        }
        else if (ALUNO_INFO.rate < 2 && ALUNO_INFO.rate > 1) {
            return {
                star1path: '/images/star_full.png',
                star2path: '/images/semi_star.png',
                star3path: '/images/star_gray.png',
                star4path: '/images/star_gray.png',
                star5path: '/images/star_gray.png',
            }
         }
            else if (ALUNO_INFO.rate < 1 && ALUNO_INFO.rate > 0) {
                return {
                    star1path: '/images/semi_star.png',
                    star2path: '/images/star_gray.png',
                    star3path: '/images/star_gray.png',
                    star4path: '/images/star_gray.png',
                    star5path: '/images/star_gray.png',
                }

        }
        
    });
    console.log(virgula);
    return (
        <div style={{ height: "100%", }}>

            <Header img={true} name={true} coach={true} />
            <div className="grade">
                <a>Sua nota é:</a>
                <div className="starsrate">
                    <img src={path.star1path} alt="star1" />
                    <img src={path.star2path} alt="star2" />
                    <img src={path.star3path} alt="star3" />
                    <img src={path.star4path} alt="star4" />
                    <img src={path.star5path} alt="star5" />
                </div>
                <b>
                    {(virgula==true) && `${ALUNO_INFO.rate}.0`}
                    {(virgula==false) && `${ALUNO_INFO.rate}`}
                    
                </b>
            </div>
        </div>
    )
}