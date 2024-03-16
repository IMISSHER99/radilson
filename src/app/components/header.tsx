import Link from "next/link";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="w-full fixed top-0 h-[85px] flex px-12 justify-between">
            <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 26" className="w-[67px]">
                    <path className="fill-white" d="M 15.393 5.803 L 15.393 15.41 L 10.59 15.41 C 9.932 15.41 9.312 15.287 8.732 15.042 C 8.152 14.785 7.644 14.439 7.209 14.004 C 6.774 13.569 6.434 13.061 6.188 12.481 C 5.932 11.89 5.803 11.265 5.803 10.607 C 5.803 9.948 5.932 9.329 6.188 8.749 C 6.434 8.158 6.774 7.644 7.209 7.209 C 7.644 6.774 8.152 6.434 8.732 6.188 C 9.312 5.932 9.932 5.803 10.59 5.803 Z M 15.393 25 L 20.197 25 L 20.197 1 L 10.59 1 C 9.709 1 8.861 1.117 8.046 1.351 C 7.232 1.575 6.473 1.898 5.77 2.322 C 5.056 2.735 4.409 3.237 3.828 3.828 C 3.237 4.409 2.735 5.056 2.322 5.77 C 1.898 6.484 1.575 7.248 1.351 8.063 C 1.117 8.877 1 9.725 1 10.607 C 1 11.432 1.106 12.236 1.318 13.017 C 1.519 13.798 1.815 14.54 2.205 15.243 C 2.584 15.946 3.053 16.593 3.611 17.184 C 4.169 17.776 4.794 18.289 5.485 18.724 L 2.824 25 L 7.929 25 L 10.021 20.163 L 15.393 20.197 Z"></path>
                    <path className="fill-white" d="M 38.026 15.41 L 38.026 10.607 C 38.026 9.948 37.897 9.329 37.641 8.749 C 37.395 8.158 37.055 7.644 36.62 7.209 C 36.185 6.774 35.671 6.434 35.08 6.188 C 34.5 5.932 33.881 5.803 33.222 5.803 C 32.564 5.803 31.939 5.932 31.348 6.188 C 30.768 6.434 30.26 6.774 29.825 7.209 C 29.39 7.644 29.044 8.158 28.787 8.749 C 28.542 9.329 28.419 9.948 28.419 10.607 L 28.419 15.41 Z M 42.829 25 L 38.026 25 L 38.026 20.197 L 28.419 20.197 L 28.419 25 L 23.632 25 L 23.632 10.607 C 23.632 9.279 23.883 8.035 24.385 6.874 C 24.887 5.703 25.568 4.682 26.427 3.812 C 27.297 2.941 28.313 2.255 29.473 1.753 C 30.645 1.251 31.894 1 33.222 1 C 34.55 1 35.794 1.251 36.954 1.753 C 38.126 2.255 39.147 2.941 40.017 3.812 C 40.887 4.682 41.574 5.703 42.076 6.874 C 42.578 8.035 42.829 9.279 42.829 10.607 Z"></path>
                    <path className="fill-white" d="M 65.198 13 C 65.198 14.105 65.053 15.17 64.763 16.197 C 64.484 17.212 64.082 18.166 63.558 19.059 C 63.033 19.94 62.409 20.749 61.683 21.485 C 60.958 22.211 60.149 22.835 59.257 23.36 C 58.364 23.884 57.404 24.291 56.378 24.582 C 55.363 24.86 54.303 25 53.198 25 L 45.968 25 L 45.968 1 L 53.198 1 C 54.303 1 55.363 1.145 56.378 1.435 C 57.404 1.714 58.364 2.116 59.257 2.64 C 60.149 3.165 60.958 3.795 61.683 4.531 C 62.409 5.257 63.033 6.066 63.558 6.958 C 64.082 7.84 64.484 8.794 64.763 9.82 C 65.053 10.835 65.198 11.895 65.198 13 Z M 60.395 13 C 60.395 12.007 60.205 11.075 59.826 10.205 C 59.458 9.335 58.944 8.576 58.286 7.929 C 57.639 7.271 56.875 6.752 55.993 6.372 C 55.123 5.993 54.191 5.803 53.198 5.803 L 50.805 5.803 L 50.805 20.197 L 53.198 20.197 C 54.191 20.197 55.123 20.013 55.993 19.644 C 56.875 19.265 57.639 18.752 58.286 18.105 C 58.944 17.446 59.458 16.682 59.826 15.812 C 60.205 14.93 60.395 13.993 60.395 13 Z"></path>
                </svg>
            </div>
            <div className="flex items-center justify-center">
                <nav className="flex items-center justify-center navigation">
                    <Link href={"/"} className="flex flex-col items-start justify-center navigation__link">
                        <div className="flex items-center w-full">
                            <p className="font-pixel text-xs font-normal mr-1 number">01</p>
                            <div className="line"></div>
                        </div>
                        <p className="font-fig capitalize text-sm text-white font-semibold">work</p>
                    </Link>
                    <Link href={"/"} className="flex flex-col items-start justify-center navigation__link">
                        <div className="flex items-center w-full">
                            <p className="font-pixel text-xs font-normal mr-1 number">02</p>
                            <div className="line"></div>
                        </div>
                        <p className="font-fig capitalize text-sm text-white font-semibold">playground</p>
                    </Link>
                    <Link href={"/"} className="flex flex-col items-start justify-center navigation__link">
                        <div className="flex items-center w-full">
                            <p className="font-pixel text-xs font-normal mr-1 number">03</p>
                            <div className="line"></div>
                        </div>
                        <p className="font-fig capitalize text-sm text-white font-semibold">about me</p>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;