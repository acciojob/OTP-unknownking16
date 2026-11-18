//your JS code here. If required.
const codes = document.querySelectorAll('.code');

       
codes[0].focus();

codes.forEach((code, index) => {

code.addEventListener('input', (e) => {

            const value = e.target.value;

                
             e.target.value = value.replace(/[^0-9]/g, '');

            if (e.target.value !== '') {

              
	             if (index < codes.length - 1) {
                        odes[index + 1].focus();
                    }

                }

            });

code.addEventListener('keydown', (e) => {

       if (e.key === 'Backspace') {

              if (code.value === '') {

                        
                        if (index > 0) {
                            codes[index - 1].focus();
                        }

                    } else {

                        
                        code.value = '';

                        if (index > 0) {
                            codes[index - 1].focus();
                        }

                        e.preventDefault();
                    }

                }

            });

        });