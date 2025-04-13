import { useEffect, useRef } from "react"
import PropTypes from 'prop-types';

export const RevealOnScroll = ({ children }) => {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver( ([entry]) => {
            if(entry.isIntersecting){
                ref.current.classList.add('revealed')
            }
        },{threshold: 0.2, rootMargin: '0px 0px -50px 0px'}
        );

        if(ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    })

  return <div ref={ref} className="reveal">{children}</div>
}

// Definimos las PropTypes para el componente
RevealOnScroll.propTypes = {
  children: PropTypes.node.isRequired
};
