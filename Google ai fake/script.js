document.addEventListener('mousemove', (e) => {
    const spheres = document.querySelectorAll('.gradient-sphere');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    spheres.forEach((sphere, index) => {
        const speed = (index + 1) * 0.2;
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        
        sphere.style.transform = `translate(${x}px, ${y}px)`;
    });
}); 