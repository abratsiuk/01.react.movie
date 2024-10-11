import React from 'react';

function Footer() {
    return (
        <footer className='page-footer'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} abratsiuk
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/abratsiuk/01.react.movie'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
