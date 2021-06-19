import { motion } from "framer-motion";
import React from "react";
import ShowCommission from "../../src/commissions/show";
import { CommissionsContainer } from "../../src/commissions/styles";

export default function CommissionsPage() {
  return (
    <CommissionsContainer>
      <h1>Commission</h1>
      <br />
      <br />
      <ShowCommission
        url={[
          "https://pbs.twimg.com/media/E1-3WmeVgAMrguO?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/E2y0rCRVoAEA6by?format=jpg&name=large",
        ]}
        title="Rigging"
        tabTitles={["Teste", "Abababa"]}
        tabContents={[
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            placeat distinctio nesciunt iste sint aliquid, fugit blanditiis ex
            iure ipsam debitis accusantium sit vitae ullam obcaecati neque?
            Dicta, et temporibus!
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate repellendus, eligendi odio fuga consectetur, pariatur
              delectus perferendis provident excepturi, accusantium blanditiis
              quos ratione molestias saepe velit illo ut facilis. Molestiae
              optio autem nihil nisi illum eius dolorum ipsum dolor enim
              perspiciatis suscipit quos est velit ipsa possimus, ad rerum
              debitis amet doloribus dignissimos delectus tempore blanditiis
              veniam? Corrupti, expedita doloribus.
            </p>
          </div>,
          <div style={{ display: "flex", alignItems: "center", padding: 30 }}>
            <ul
              style={{
                flexGrow: 2,
                flex: 2,
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
              <li>Body Movements</li>
              <li>High Range Head Movements</li>
              <li>Complex Physics</li>
              <li>Head and Body Tilts</li>
              <li>Vowel Mouth</li>
            </ul>
            <h3 style={{ flexGrow: 1, flex: 1 }}>$ 180,00</h3>
          </div>,
        ]}
      />
      <br />
      <br />
      <div className="additional">
        <h3>Additional</h3>

        <div className="tags">
          <div className="tag">
            <div className="title-tag">.</div>
            <div className="title-tag">Ilustration Rig</div>
            <div className="price-tag">180</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Idle Motion</div>
            <div className="price-tag">10</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Idle Motion</div>
            <div className="price-tag">10</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Idle Motion</div>
            <div className="price-tag">10</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Idle Motion</div>
            <div className="price-tag">10</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Idle Motion</div>
            <div className="price-tag">10</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <ShowCommission
        url={[
          "https://pbs.twimg.com/media/E2y0rCRVoAEA6by?format=jpg&name=large",
          "https://pbs.twimg.com/media/E1vs4wsVEAgOedU?format=jpg&name=4096x4096",
        ]}
        title="Model"
        tabTitles={["Teste", "Abababa"]}
        tabContents={[
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            placeat distinctio nesciunt iste sint aliquid, fugit blanditiis ex
            iure ipsam debitis accusantium sit vitae ullam obcaecati neque?
            Dicta, et temporibus!
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate repellendus, eligendi odio fuga consectetur, pariatur
              delectus perferendis provident excepturi, accusantium blanditiis
              quos ratione molestias saepe velit illo ut facilis. Molestiae
              optio autem nihil nisi illum eius dolorum ipsum dolor enim
              perspiciatis suscipit quos est velit ipsa possimus, ad rerum
              debitis amet doloribus dignissimos delectus tempore blanditiis
              veniam? Corrupti, expedita doloribus.
            </p>
          </div>,
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
            placeat distinctio nesciunt iste sint aliquid, fugit blanditiis ex
            iure ipsam debitis accusantium sit vitae ullam obcaecati neque?
            Dicta, et temporibus!
          </div>,
        ]}
      />
      <footer>
        <h3 style={{ textAlign: "left" }}>Interested?</h3>
        <motion.button
          whileHover={{
            y: -10,
            filter: "hue-rotate(-20deg)",
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          Enter in contact
        </motion.button>
      </footer>
    </CommissionsContainer>
  );
}
