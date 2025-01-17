/* eslint-disable react/prop-types */
function PrimaryButton({ text }) {
  return (
    <div>
      <button
        className="!mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
        style="secondary"
      >
        {text}
      </button>
    </div>
  );
}

export default PrimaryButton;
