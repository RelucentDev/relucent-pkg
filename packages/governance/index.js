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
  website: {
    url: "https://relucent.dev",
  },
  github: {
    name: "relucentdev",
    get url() {
      return `https://github.com/${this.name}`;
    },
  },
  crn: {
    number: "13663511",
    get url() {
      return `https://find-and-update.company-information.service.gov.uk/company/${this.number}`;
    }
  },
  vrn: {
    number: "447608178",
    get global() {
      return `GB${this.number}`;
    },
  },
};
