import {Path, Rect, Svg} from "react-native-svg";

export function MiniIcon() {
    return (
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M12.0205 3.41C8.71045 3.41 6.02045 6.1 6.02045 9.41V12.3C6.02045 12.91 5.76045 13.84 5.45045 14.36L4.30045 16.27C3.59045 17.45 4.08045 18.76 5.38045 19.2C9.69045 20.64 14.3405 20.64 18.6505 19.2C19.8605 18.8 20.3905 17.37 19.7305 16.27L18.5805 14.36C18.2805 13.84 18.0205 12.91 18.0205 12.3V9.41C18.0205 6.11 15.3205 3.41 12.0205 3.41Z"
                stroke="#1C1C1C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
            <Path
                d="M13.8705 3.7C13.5605 3.61 13.2405 3.54 12.9105 3.5C11.9505 3.38 11.0305 3.45 10.1705 3.7C10.4605 2.96 11.1805 2.44 12.0205 2.44C12.8605 2.44 13.5805 2.96 13.8705 3.7Z"
                stroke="#1C1C1C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
            <Path
                d="M15.0205 19.56C15.0205 21.21 13.6705 22.56 12.0205 22.56C11.2005 22.56 10.4405 22.22 9.90046 21.68C9.36046 21.14 9.02046 20.38 9.02046 19.56"
                stroke="#1C1C1C" stroke-width="1.5" stroke-miterlimit="10"/>
        </Svg>

    )
}

export function SearchIcon() {
    return (
        <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M9.58358 18C13.9558 18 17.5002 14.4556 17.5002 10.0833C17.5002 5.71108 13.9558 2.16667 9.58358 2.16667C5.21133 2.16667 1.66692 5.71108 1.66692 10.0833C1.66692 14.4556 5.21133 18 9.58358 18Z"
                stroke="#1C1C1C" stroke-opacity="0.3" stroke-width="1.25" stroke-linecap="round"
                stroke-linejoin="round"/>
            <Path d="M18.3336 18.8333L16.6669 17.1667" stroke="#1C1C1C" stroke-opacity="0.3" stroke-width="1.25"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

    )
}

export function FilterIcon() {
    return (
        <Svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="0.000244141" y="0.5" width="46" height="46" rx="8" fill="#006D33"/>
            <Path
                d="M24.9336 29.3917C24.9336 29.9 24.6002 30.5667 24.1752 30.825L23.0002 31.5833C21.9086 32.2583 20.3919 31.5 20.3919 30.15V25.6917C20.3919 25.1 20.0586 24.3417 19.7169 23.925L16.5169 20.5583C16.0919 20.1333 15.7586 19.3833 15.7586 18.875V16.9417C15.7586 15.9333 16.5169 15.175 17.4419 15.175H28.5586C29.4836 15.175 30.2419 15.9333 30.2419 16.8583V18.7083C30.2419 19.3833 29.8169 20.225 29.4002 20.6417"
                stroke="white" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
            <Path
                d="M26.3919 27.2667C27.8647 27.2667 29.0586 26.0728 29.0586 24.6C29.0586 23.1273 27.8647 21.9333 26.3919 21.9333C24.9192 21.9333 23.7252 23.1273 23.7252 24.6C23.7252 26.0728 24.9192 27.2667 26.3919 27.2667Z"
                stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M29.5586 27.7667L28.7252 26.9333" stroke="white" stroke-width="1.25" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>

    )
}

export function BackIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.57 5.93L3.5 12L9.57 18.07" stroke="#1C1C1C" stroke-width="1.5" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M20.5 12H3.66998" stroke="#1C1C1C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>

    )
}

export function Minus() {
    return (
        <Svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5 10H15" stroke="#006D33" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

    )
}

export function Plus() {
    return (
        <Svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M5 10H15" stroke="#006D33" stroke-width="1.38889" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10 15V5" stroke="#006D33" stroke-width="1.38889" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>


    )
}

export function Download() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <Path
                d="M1.14524 19.8547C1.88385 20.5932 2.86572 21 3.91018 20.9999L17.0899 21C18.1343 21 19.1162 20.5932 19.8548 19.8547C20.5933 19.1161 21 18.1342 20.9999 17.0899L21 3.91014C20.9999 1.75411 19.2458 0 17.0898 0H3.91018C1.75416 0 0 1.75411 0 3.91018V17.0897C0 18.1342 0.406711 19.1162 1.14524 19.8547ZM14.197 13.604L10.9351 16.8659C10.8197 16.9813 10.6633 17.0461 10.5001 17.0461C10.3369 17.0461 10.1805 16.9813 10.0651 16.8659L6.80326 13.6041C6.56295 13.3639 6.56296 12.9743 6.80318 12.734C7.04349 12.4939 7.43298 12.4938 7.67333 12.734L9.88496 14.9457L9.88488 8.38248C9.88488 8.04271 10.1603 7.76725 10.5001 7.76725C10.8399 7.76725 11.1154 8.04271 11.1154 8.38248L11.1155 14.9454L13.327 12.7339C13.4471 12.6137 13.6046 12.5536 13.762 12.5536C13.9195 12.5536 14.0769 12.6137 14.1971 12.7339C14.4372 12.9741 14.4372 13.3636 14.197 13.604ZM4.5691 3.95391H16.4308C16.7705 3.95391 17.046 4.22936 17.046 4.56914C17.046 4.90892 16.7705 5.18438 16.4308 5.18438H4.56906C4.22933 5.18438 3.95383 4.90892 3.95383 4.56914C3.95386 4.22936 4.22933 3.95391 4.5691 3.95391Z"
                fill="#006D33"/>
        </Svg>


    )
}


