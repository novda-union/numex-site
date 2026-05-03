import type { Metadata } from 'next'
import { LegalShell } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Delete Your Numex Account | Numex',
  description: 'How to permanently delete your Numex account and data.',
}

const updatedAt = 'May 3, 2026'

const deletedItems = [
  'account',
  'sessions',
  'profile',
  'user-created financial records',
  'sync data',
  'encryption backups',
  'local app data on that device',
]

export default function DeleteAccountPage() {
  return (
    <LegalShell
      title="Delete your Numex account"
      description="Deletion is immediate and permanent. Once deletion succeeds, your Numex account and eligible Numex data cannot be restored."
      updatedAt={updatedAt}
    >
      <section>
        <h2>Delete In The App</h2>
        <p>
          To delete your account in the app, open Numex, go to Settings &gt;
          Security &gt; Delete Account, then confirm with Google sign-in.
        </p>
      </section>

      <section>
        <h2>Need Help Without The App?</h2>
        <p>
          If you cannot access the app, email{' '}
          <a href="mailto:support@numex.uz">support@numex.uz</a> from your
          account email and request account deletion.
        </p>
      </section>

      <section>
        <h2>What We Delete</h2>
        <p>When deletion succeeds, Numex deletes your:</p>
        <ul>
          {deletedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>What May Be Retained</h2>
        <p>
          Polar and other payment providers may retain historic payment/order
          records where required for legal, tax, fraud prevention, dispute, or
          compliance purposes. Numex requests Polar customer anonymization when
          deleting Polar-linked accounts.
        </p>
      </section>
    </LegalShell>
  )
}
