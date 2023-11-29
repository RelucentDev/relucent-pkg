/**
 * Relucent Governance.
 *
 * @since     1.0.0
 * @module    Relucent\Governance
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */

module.exports = {
  name: "Relucent",
  legalName: "Relucent Ltd",
  crn: {
    number: "13663511",
    get url() {
      return `https://find-and-update.company-information.service.gov.uk/company/${this.number}`;
    }
  },
  vrn: {
    number: "GB447608178"
  },
};
