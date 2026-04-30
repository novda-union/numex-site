import type { Metadata } from 'next'
import { LegalShell } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Terms of Service | Numex',
  description:
    'Terms of Service for Numex, a private finance assistant powered by Xroot.',
}

const updatedAt = 'April 30, 2026'

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      description="These terms explain the rules for using Numex, including accounts, subscriptions, AI features, and user responsibilities."
      updatedAt={updatedAt}
    >
      <section>
        <h2>Provider</h2>
        <p>
          Numex is provided by Sardor Aminov, an individual entrepreneur
          registered in Uzbekistan. Xroot is the team and brand name used for
          Numex. For support, contact{' '}
          <a href="mailto:support@numex.uz">support@numex.uz</a>.
        </p>
      </section>

      <section>
        <h2>Using Numex</h2>
        <p>
          Numex helps users record, organize, and understand personal financial
          activity. You must be at least 13 years old to use Numex. You are
          responsible for keeping your account, device, recovery phrase, and
          authentication methods secure.
        </p>
        <p>
          You agree to use Numex lawfully and not to abuse, disrupt, reverse
          engineer, overload, or misuse the app, backend, payment systems, AI
          systems, or other users&apos; access.
        </p>
      </section>

      <section>
        <h2>Accounts And Security</h2>
        <p>
          Numex currently uses Google Sign-In for account access. You are
          responsible for the accuracy of information in your account and for
          keeping access to your Google account secure.
        </p>
        <p>
          Numex may suspend or restrict access if we reasonably believe an
          account is being used for abuse, fraud, security attacks, unlawful
          activity, or violations of these terms.
        </p>
      </section>

      <section>
        <h2>Financial Information And AI Features</h2>
        <p>
          Numex is a budgeting and personal finance assistant. It is not a bank,
          accountant, investment adviser, tax adviser, or legal adviser. Any AI
          parsing, categorization, summary, or insight is informational only and
          may be incomplete or incorrect.
        </p>
        <p>
          You are responsible for reviewing your transactions, balances,
          categories, debts, and reports before relying on them for decisions.
          Do not use Numex as the only source for financial, tax, legal, or
          investment decisions.
        </p>
      </section>

      <section>
        <h2>Subscriptions And Payments</h2>
        <p>
          Some Numex features may require a paid subscription or purchase.
          Prices, billing periods, trial availability, renewal terms, and
          cancellation options are shown before purchase through the applicable
          store or payment provider.
        </p>
        <p>
          App store subscriptions are managed through the relevant app store.
          Other payment providers, such as Payme or Polar where available, may
          have their own payment terms. Except where required by law or platform
          rules, payments are not refundable after the paid service period
          begins.
        </p>
      </section>

      <section>
        <h2>User Data</h2>
        <p>
          Your use of Numex is also governed by our Privacy Policy. It explains
          what data we collect, how selected financial fields are encrypted, how
          AI and payment providers are used, and how account deletion works.
        </p>
      </section>

      <section>
        <h2>Service Availability</h2>
        <p>
          We try to keep Numex available and reliable, but we do not guarantee
          uninterrupted service. Features may be changed, paused, limited, or
          discontinued as Numex evolves or as required by platforms, providers,
          law, security, or operational needs.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          Numex, Xroot branding, app design, software, logos, and service
          content are owned by us or our licensors. You may not copy,
          redistribute, or create derivative works from Numex except as allowed
          by law or by written permission.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          To the maximum extent allowed by law, Numex is provided as is and as
          available. We are not liable for indirect, incidental, special,
          consequential, or punitive damages, or for losses caused by incorrect
          user input, AI output, device loss, unavailable providers, or
          unauthorized account access outside our reasonable control.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of Uzbekistan, except where
          mandatory consumer protection laws in your location require otherwise.
          Disputes will be handled in the competent courts of Uzbekistan unless
          applicable law requires another venue.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update these terms as Numex changes. Continued use of Numex
          after updated terms become effective means you accept the updated
          terms.
        </p>
      </section>
    </LegalShell>
  )
}
