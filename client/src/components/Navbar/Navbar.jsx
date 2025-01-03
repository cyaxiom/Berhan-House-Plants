import { PrimaryButton } from "../z-index.component";

function Navbar() {
  return (
    <div className="flex flex-col w-[100vw] items-center relative bg-[#ffffff] border-b [border-bottom-style:solid] border-[color:var(--semantic-border-primary)] overflow-x-hidden">
      <div className="flex h-[72px] items-center justify-between px-16 py-0 relative self-stretch w-full border-b [border-bottom-style:solid] border-[color:var(--semantic-border-primary)]">
        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          {/* <CompanyLogo className="!relative !w-[84px] !h-9" /> */}
          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            <div className="relative w-fit bg-green-500">Link One</div>

            <div className="relative w-fit bg-green-500">Link Two</div>

            <div className="relative w-fit bg-green-500">Link Three</div>

            <div className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit bg-green-500">Link Four</div>

              <img
                className="relative w-6 h-6"
                alt="Chevron down"
                // src={chevronDown}
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
          {/* <Button
          alternate={false}
          className="!mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
          iconPosition="no-icon"
          small
          style="secondary"
        />
        <Button
          alternate={false}
          className={buttonStylePrimarySmallClassName}
          divClassName={buttonDivClassName}
          iconPosition="no-icon"
          small
          style="primary"
        /> */}
        </div>
      </div>

      <div className="flex w-[1440px] items-start relative flex-[0_0_auto]">
        <div className="flex items-start gap-8 pl-16 pr-8 py-8 relative flex-1 grow">
          <div className="flex flex-col items-start gap-4 relative flex-1 grow">
            <div className="relative self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-semantic-text-primary text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
              Page group one
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page One
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>

              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Two
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>

              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Three
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>

              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Four
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 relative flex-1 grow">
            <div className="relative self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-semantic-text-primary text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
              Page group two
            </div>

            <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Five
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>

              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Six
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>

              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Seven
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>

              <div className="flex w-[376px] h-[61px] items-start gap-3 px-0 py-2 relative">
                {/* <Relume className="!relative !w-6 !h-6" /> */}
                <div className="flex flex-col items-start relative flex-1 grow">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-semantic-link-primary text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Page Eight
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[560px] items-start gap-4 pl-8 pr-24 py-8 relative self-stretch bg-semantic-background-color-secondary">
          <div className="relative self-stretch mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-semantic-text-primary text-[length:var(--text-small-semi-bold-font-size)] tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]">
            Featured from Blog
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-40 h-[105px] object-cover"
                alt="Placeholder image"
                // src={placeholderImage}
              />

              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[color:var(--primitive-color-neutral-black)] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Article Title
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>

                <div className="relative w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-semantic-link-primary text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
                  Read more
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-40 h-[105px] object-cover"
                alt="Placeholder image"
                // src={image}
              />

              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-[color:var(--primitive-color-neutral-black)] text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                    Article Title
                  </div>

                  <p className="relative self-stretch font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-semantic-text-primary text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
                    Lorem ipsum dolor sit amet consectetur elit
                  </p>
                </div>

                <div className="relative w-fit font-text-small-link font-[number:var(--text-small-link-font-weight)] text-semantic-link-primary text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
                  Read more
                </div>
              </div>
            </div>
          </div>

          {/* <Button
          alternate={false}
          className="!flex-[0_0_auto] !px-0 !py-1"
          icon={buttonIcon}
          iconPosition="trailing"
          small={false}
          style="link"
        /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
