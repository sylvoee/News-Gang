import Script from "next/script";

const Footer = () => {
  return <div>
  
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></Script>
   <div className ="footer mt-3 bg-secondary text-light">
   <hr></hr>

        <div className="text-center">Developed by <a className="text-decoration-none text-light" href="https://www.glareminds.com/">Glareminds Tech</a></div>
            <p className="text-center">copy right: @2023</p>
        </div>
  </div>;
};
export default Footer;