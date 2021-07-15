import { motion } from "framer-motion";
import React from "react";
import ShowCommission from "../../src/commissions/show";
import { CommissionsContainer } from "../../src/commissions/styles";

export default function CommissionsPage() {
  return (
    <CommissionsContainer>
      <h1>Commission</h1>
      <ShowCommission
        url={[
          "https://pbs.twimg.com/media/E1-3WmeVgAMrguO?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/E2y0rCRVoAEA6by?format=jpg&name=large",
        ]}
        title="Rigging"
        tabTitles={["Fullbody", "Halfbody", "Simple"]}
        tabContents={[
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
            <h3 style={{ flexGrow: 1, flex: 1 }}>$ 160</h3>
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
              <li>Head and Body Tilts</li>
            </ul>
            <h3 style={{ flexGrow: 1, flex: 1 }}>$ 180,00</h3>
          </div>,
        ]}
      />
      <div className="additional">
        <h3>Adicionais Rigging</h3>

        <div className="tags">
          <div className="tag">
            <div className="title-tag">.</div>
            <div className="title-tag">Ilustration Rig</div>
            <div className="price-tag">$100</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Idle Motion</div>
            <div className="price-tag">$10</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Motion Expression</div>
            <div className="price-tag">$10</div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Extra Toggle Expression</div>
            <div className="price-tag">$10-50</div>
            <div>
              <small> each, depending on complexity</small>
            </div>
          </div>
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Extra Clothing</div>
            <div className="price-tag">+50%</div>
          </div>
        </div>
      </div>
      <ShowCommission
        url={[
          "https://pbs.twimg.com/media/E2y0rCRVoAEA6by?format=jpg&name=large",
          "https://pbs.twimg.com/media/E1vs4wsVEAgOedU?format=jpg&name=4096x4096",
        ]}
        title="Modelo"
        tabTitles={["Fullbody", "Halfbody"]}
        tabContents={[
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ textAlign: "center" }}>$ 200</h3>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={{ textAlign: "center" }}>$ 160</h3>
          </div>,
        ]}
      />
      <div className="additional">
        <h3>Adicionais Modelo</h3>

        <div className="tags">
          <div className="tag">
            <div className="title-tag">+</div>
            <div className="title-tag">Expression</div>
            <div className="price-tag">$10</div>
          </div>
        </div>
      </div>
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
