/* globals gsap, ScrollTrigger, MotionPathPlugin */ gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const init = ()=>{
    const paths = document.querySelectorAll('.motion-paths *');
    if (!paths.length) return;
    const xTo = gsap.quickTo('.pov-pan', 'x', {
        duration: 1.3,
        ease: 'expo'
    });
    const yTo = gsap.quickTo('.pov-pan', 'y', {
        duration: 1.3,
        ease: 'expo'
    });
    gsap.timeline({
        scrollTrigger: {
            scroller: 'main',
            trigger: '#s1',
            endTrigger: '#s6',
            start: '0 0',
            end: '100% 100%',
            scrub: 1
        },
        onUpdate: ()=>{
            xTo(-gsap.getProperty('.focal-point', 'x'));
            yTo(-gsap.getProperty('.focal-point', 'y'));
        },
        defaults: {
            duration: 1,
            ease: 'none'
        }
    }).to('.focal-point', {
        motionPath: {
            path: paths[0]
        },
        immediateRender: true
    }, 0).fromTo('.pov-scale', {
        x: 500,
        y: 500,
        scale: 3.2,
        rotate: 20
    }, {
        rotate: -5,
        scale: 2.5,
        ease: 'sine.inOut'
    }, 0).to('.focal-point', {
        motionPath: {
            path: paths[1]
        }
    }, 1).to('.pov-scale', {
        rotate: 8,
        scale: 3.3,
        ease: 'sine.inOut'
    }, 1).to('.focal-point', {
        motionPath: {
            path: paths[2]
        }
    }, 2).to('.pov-scale', {
        rotate: -4,
        scale: 2.75,
        ease: 'sine.inOut'
    }, 2).to('.focal-point', {
        motionPath: {
            path: paths[3]
        }
    }, 3).to('.pov-scale', {
        rotate: 5,
        scale: 2,
        ease: 'sine.inOut'
    }, 3).to('.focal-point', {
        motionPath: {
            path: paths[4]
        }
    }, 4).to('.pov-scale', {
        rotate: -5,
        scale: 3,
        ease: 'sine.inOut'
    }, 4);
    gsap.set('.pov-pan', {
        x: -gsap.getProperty('.focal-point', 'x'),
        y: -gsap.getProperty('.focal-point', 'y')
    });
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {
    once: true
});
else init();

//# sourceMappingURL=KineticTypePageTransition-main.145c697d.js.map
