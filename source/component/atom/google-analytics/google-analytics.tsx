import {ReactElement} from "react";
import {Helmet} from "react-helmet";
import {create} from "/source/component/create";


export const GoogleAnalytics = create(
  null, "GoogleAnalytics",
  function ({
    measurementId
  }: {
    measurementId: string
  }): ReactElement {

    return (
      <Helmet>
        <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}/>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "${measurementId}", {send_page_view: false});
          `}
        </script>
      </Helmet>
    );

  }
);