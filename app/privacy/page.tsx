import type { Metadata } from 'next'
import { LegalShell } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Privacy Policy | Numex',
  description:
    'Privacy Policy for Numex, a private finance assistant powered by Xroot.',
}

const updatedAt = 'May 3, 2026'

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      description="This policy explains what Numex collects, how we use it, what we share with service providers, and how users can request deletion."
      updatedAt={updatedAt}
    >
      <section>
        <h2>Who Provides Numex</h2>
        <p>
          Numex is provided by Sardor Aminov, an individual entrepreneur
          registered in Uzbekistan. Xroot is the team and brand name used for
          Numex. You can contact us at{' '}
          <a href="mailto:privacy@numex.uz">privacy@numex.uz</a>.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We collect information needed to provide the Numex finance app,
          including account information from Google Sign-In such as name, email
          address, profile picture, and Google account identifier.
        </p>
        <p>
          We also collect app settings and profile information such as preferred
          currency, language, timezone, onboarding status, subscription status,
          notification preferences, and account security state.
        </p>
        <p>
          Numex processes financial content that you enter or generate in the
          app, including transactions, balances, categories, debts, merchants,
          notes, amounts, currencies, dates, and text or voice queries used to
          create transactions.
        </p>
        <p>
          If you use voice features, Numex records and uploads microphone audio
          only after you start a voice transaction. The audio is used to parse
          your transaction and is stored temporarily for processing.
        </p>
        <p>
          We collect payment and subscription information needed to manage paid
          access, such as plan, product, provider, subscription status, billing
          period, purchase identifiers, and limited card token information when
          Payme is used. We do not store full card numbers or CVV after payment
          provider processing.
        </p>
        <p>
          For security and reliability, we process technical data such as IP
          address, user agent, request IDs, request status, session tokens,
          device timezone, crash or error context, and rate-limit or usage
          counters.
        </p>
      </section>

      <section>
        <h2>Encryption And Sensitive Financial Data</h2>
        <p>
          Numex encrypts the local app database with SQLCipher. The device data
          encryption key and private key are stored in platform secure storage.
        </p>
        <p>
          For synced financial records, Numex encrypts selected fields before or
          during server storage. These fields include transaction amounts,
          merchants, notes, raw queries, user-created category titles, balance
          names, balance descriptions, balance initial amounts, debt
          counterparties, and debt notes.
        </p>
        <p>
          Numex also stores encrypted backups of your data encryption key and
          private key. These backups are encrypted using a key derived from your
          recovery phrase. We do not store your recovery phrase in plaintext.
        </p>
        <p>
          Some data remains accessible to Numex servers so the service can work:
          account details, subscription records, transaction metadata such as
          date, currency, type, category, balance, source, and timestamps, debt
          amounts and status, and data needed temporarily for AI parsing,
          support, security, and billing.
        </p>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p>
          We use information to create and secure accounts, sync financial data
          across devices, parse voice and text transactions, generate financial
          insights, manage subscriptions, prevent abuse, provide support, send
          service emails, and comply with legal obligations.
        </p>
      </section>

      <section>
        <h2>Service Providers And Sharing</h2>
        <p>
          We share data only as needed to operate Numex. Service providers may
          include Google Sign-In, Google Gemini for AI parsing and insights,
          RevenueCat and Google Play Billing for subscriptions, Payme and Polar
          for payments where enabled, Resend for transactional email, and our
          hosting, database, storage, logging, and infrastructure providers.
        </p>
        <p>
          We do not sell personal or sensitive user data. We do not use your
          financial data for third-party advertising or tracking.
        </p>
      </section>

      <section>
        <h2>Permissions</h2>
        <p>
          Numex requests microphone access for voice transaction recording,
          notification permission for reminders and app notices, biometric
          authentication for app security features, and internet access for
          account, sync, AI, and subscription features. We do not request
          contacts, SMS, call logs, precise location, photos, or health data.
        </p>
      </section>

      <section>
        <h2>Retention And Deletion</h2>
        <p>
          We keep account and app data while your account is active and as long
          as needed for the purposes described in this policy. Temporary voice
          audio used for async parsing is deleted after processing, and stale
          temporary audio is cleaned up automatically.
        </p>
        <p>
          You can request account deletion inside the Numex app. Account
          deletion is immediate and permanent after you confirm with Google
          sign-in. Your account and associated user data are permanently deleted
          unless we must retain limited records for security, fraud prevention,
          accounting, dispute resolution, or legal compliance.
        </p>
        <p>
          To request deletion outside the app, email{' '}
          <a href="mailto:privacy@numex.uz">privacy@numex.uz</a> from the email
          address linked to your Numex account.
        </p>
      </section>

      <section>
        <h2>Children</h2>
        <p>
          Numex is not directed to children under 13. If you believe a child has
          provided personal data to Numex, contact us and we will take
          appropriate action.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>
          We may update this Privacy Policy when Numex changes or when legal or
          platform requirements change. We will update the effective date above
          when we publish changes.
        </p>
      </section>
    </LegalShell>
  )
}
