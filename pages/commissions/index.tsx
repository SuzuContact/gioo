import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import CheckedLi from "../../src/commissions/checkedLi";
import ShowCommission from "../../src/commissions/show";
import { CommissionsContainer } from "../../src/commissions/styles";

export default function CommissionsPage() {
  const { push } = useRouter();

  const redirectContact = () => {
    push("/contato");
  };

  return (
    <CommissionsContainer>
      <section className="section-header">
        <div className="section-content">
          <h1>Commission</h1>
        </div>
      </section>

      <section className="section-rigging">
        <div className="section-content">
          <ShowCommission
            url={[
              "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/2021-07-06_19-25-23_Trim.gif?alt=media&token=9df199c1-a445-410a-b001-550ddbe0ec9d",
              "https://firebasestorage.googleapis.com/v0/b/hololive-6a02e.appspot.com/o/final.gif?alt=media&token=59b178e1-ff73-4c6a-9c8c-d21953d79200",
              "/images/simples.png",
            ]}
            title="Rigging"
            tabTitles={["Fullbody", "Halfbody", "Simple"]}
            tabContents={[
              <div
                className="tab-content-item"
                style={{ display: "flex", alignItems: "center", padding: 30 }}
              >
                <ul
                  style={{
                    flexGrow: 2,
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                  }}
                >
                  <CheckedLi label="Body Movements" />
                  <CheckedLi label="High Range Head Movements" />
                  <CheckedLi label="Complex Physics" />
                  <CheckedLi label="Head and Body Tilts" />
                  <CheckedLi label="Vowel Mouth" />
                </ul>
                <h3 style={{ flexGrow: 1, flex: 1 }}>$ 300,00</h3>
              </div>,
              <div
                className="tab-content-item"
                style={{ display: "flex", alignItems: "center", padding: 30 }}
              >
                <ul
                  style={{
                    flexGrow: 2,
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                  }}
                >
                  <CheckedLi label="Body Movements" />
                  <CheckedLi label="High Range Head Movements" />
                  <CheckedLi label="Complex Physics" />
                  <CheckedLi label="Head and Body Tilts" />
                  <CheckedLi label="Vowel Mouth" />
                </ul>
                <h3 style={{ flexGrow: 1, flex: 1 }}>$ 180</h3>
              </div>,
              <div
                className="tab-content-item"
                style={{ display: "flex", alignItems: "center", padding: 30 }}
              >
                <ul
                  style={{
                    flexGrow: 2,
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                  }}
                >
                  <CheckedLi label="Body Movements" />
                  <CheckedLi label="Head and Body Tilts" />
                </ul>
                <h3 style={{ flexGrow: 1, flex: 1 }}>$ 100,00</h3>
              </div>,
            ]}
          />
          <div className="additional">
            <div className="title-add">
              <div className="extra-add">
                Prices may vary depending on the complexity
              </div>
              <h3>Rigging Additionals</h3>
            </div>
            <div className="tags">
              <div className="tag">
                <div className="extra-tag">.</div>
                <div className="title-tag">Scene animation</div>
                <div className="price-tag">$100</div>
              </div>
              <div className="tag">
                <div className="extra-tag">.</div>
                <div className="title-tag">Mascot</div>
                <div className="price-tag">$30</div>
              </div>
              <div className="tag">
                <div className="extra-tag">+</div>
                <div className="title-tag">Idle Motion</div>
                <div className="price-tag">$10</div>
              </div>
              <div className="tag">
                <div className="extra-tag">+</div>
                <div className="title-tag">Motion Expression</div>
                <div className="price-tag">$10</div>
              </div>
              <div className="tag">
                <div className="extra-tag">
                  <div>
                    <small> each, depending on complexity</small>
                  </div>
                </div>
                <div className="title-tag">Extra Toggle Expression</div>
                <div className="price-tag">$10-50</div>
              </div>
              <div className="tag">
                <div className="extra-tag">+</div>
                <div className="title-tag">Extra Clothing</div>
                <div className="price-tag">+50%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-model">
        <div className="section-content">
          <ShowCommission
            url={[
              "/images/GioVanillaOutfit2.png",
              "/images/GioVanillaOutfit2.png",
            ]}
            title="Model"
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
            <div className="title-add">
              <div className="extra-add">
                Prices may vary depending on the complexity
              </div>
              <h3>Model Additionals</h3>
            </div>

            <div className="tags">
              <div className="tag">
                <div className="title-tag">+</div>
                <div className="title-tag">Expression</div>
                <div className="price-tag">$10</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CommissionsContainer>
  );
}
