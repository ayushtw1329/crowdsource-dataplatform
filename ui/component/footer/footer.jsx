export function Footer(props) {
  return (
    <div class="container-fluid">
      <div class="d-flex flex-column-reverse flex-lg-row justify-content-lg-around align-items-sm-center align-items-md-center text-center">
        <div class="d-none">
          <p class="text-muted">
            Supported by EkStep Foundation (built on{" "}
            <a href="https://sunbird.org/ai">sunbird.org/ai</a>)
          </p>
        </div>
        <div class="d-lg-inline-flex justify-content-around mb-2">
          <div class="py-2 px-16">
            <a href="./about-us.html">{"About Us"}</a>
          </div>
          <div class="py-2 px-16">
            <a href="./terms-and-conditions.html">'Terms & Conditions'</a>
          </div>
          <div class="py-2 px-16">
            <a href="./terms-and-conditions.html#privacy-policy">
              {"Privacy Policy"}
            </a>
          </div>
          <div class="py-2 px-16">
            <a href="./feedback.html">{"Feedback"}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
