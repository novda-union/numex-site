import type { Metadata } from 'next'
import { LegalShell } from '../legal-shell'

export const metadata: Metadata = {
  title: 'Delete Numex Data | Numex',
  description: 'How to delete Numex data without deleting your account.',
}

const updatedAt = 'May 3, 2026'

const appDataItems = [
  'transactions',
  'debts and repayment records',
  'custom categories',
  'balances and balance details',
  'voice entries and related parsed financial records',
  'local encrypted app data on your device',
]

export default function DeleteDataPage() {
  return (
    <LegalShell
      title="Delete your Numex data"
      description="You can delete financial data in Numex without deleting your account. Account deletion is a separate action."
      updatedAt={updatedAt}
    >
      <section>
        <h2>Delete Data In The App</h2>
        <p>
          To delete data in the app, open Numex, go to the relevant screen for
          the item you want to remove, such as Transactions, Debts, Categories,
          or Balances, then use the delete action for that item.
        </p>
      </section>

      <section>
        <h2>Need Help Deleting Data?</h2>
        <p>
          If you cannot access the app or need help deleting specific data,
          email <a href="mailto:support@numex.uz">support@numex.uz</a> from
          your account email. Tell us which Numex data you want deleted.
        </p>
      </section>

      <section>
        <h2>Data You Can Delete</h2>
        <p>Numex lets you delete user-created financial data, including:</p>
        <ul>
          {appDataItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>What May Be Kept</h2>
        <p>
          Deleting individual data does not delete your Numex account,
          authentication records, active subscription status, or payment provider
          records. Polar and other payment providers may retain historic
          payment/order records where required for legal, tax, fraud prevention,
          dispute, or compliance purposes.
        </p>
      </section>

      <section>
        <h2>Retention Period</h2>
        <p>
          App data deleted in Numex is removed from active app records. Provider,
          security, legal, tax, fraud-prevention, and dispute records may be
          retained only as long as required for those purposes.
        </p>
      </section>
    </LegalShell>
  )
}
