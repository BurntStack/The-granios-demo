import { useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, Users } from "lucide-react";
import ScrollReveal from "../components/scroll-reveal";

const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
const minimumDate = today.toISOString().slice(0, 10);

export default function Reservations() {
	const [notice, setNotice] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		const details = new FormData(event.currentTarget);
		const message = [
			"Hi The Granios, I'd like to reserve a table.",
			`Name: ${details.get("name")}`,
			`Phone: ${details.get("phone")}`,
			`Date: ${details.get("date")}`,
			`Time: ${details.get("time")}`,
			`Guests: ${details.get("guests")}`,
			details.get("requests") ? `Special requests: ${details.get("requests")}` : "",
		].filter(Boolean).join("\n");
		const whatsappUrl = `https://wa.me/919281193565?text=${encodeURIComponent(message)}`;
		const bookingWindow = window.open(whatsappUrl, "_blank");

		if (!bookingWindow) {
			window.location.assign(whatsappUrl);
			return;
		}

		bookingWindow.opener = null;
		setNotice("Your reservation details are ready in WhatsApp. Send the message to confirm your table.");
	}

	return (
		<section className="page reservations-page">
			<div className="reservation-layout">
				<ScrollReveal className="reservation-intro" animateOnLoad>
					<span className="eyebrow">THE GRANIOS CAFE | WARANGAL</span>
					<h1>Save a seat<br /><em>for good times.</em></h1>
					<p>Make room for one more. Share your details and we’ll help arrange a table for your next Granios visit.</p>
					<div className="reservation-promise">
						<CalendarDays size={18} />
						<span>For same-day bookings, please call <a href="tel:+919281193565">+91 92811 93565</a>.</span>
					</div>
				</ScrollReveal>

				<ScrollReveal className="reservation-card" delay={0.12} animateOnLoad>
					<div className="reservation-card-heading">
						<span className="eyebrow">YOUR TABLE</span>
						<h2>Make a reservation</h2>
						<p>Send a request and our team will confirm availability.</p>
					</div>
					<form className="reservation-form" onSubmit={handleSubmit}>
						<div className="reservation-fields">
							<label>
								Your name
								<input name="name" type="text" autoComplete="name" placeholder="Name for the booking" required />
							</label>
							<label>
								Mobile number
								<input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Your contact number" required />
							</label>
							<div className="reservation-row">
								<label>
									Date
									<input name="date" type="date" min={minimumDate} required />
								</label>
								<label>
									Time
									<input name="time" type="time" required />
								</label>
							</div>
							<label>
								Number of guests
								<select name="guests" defaultValue="2" required>
									{[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
										<option key={count} value={count}>{count} {count === 1 ? "guest" : "guests"}</option>
									))}
									<option value="9+">9 or more guests</option>
								</select>
							</label>
							<label>
								Special requests <span className="optional-label">Optional</span>
								<textarea name="requests" rows="3" placeholder="Let us know about any preferences" />
							</label>
						</div>
						<button className="dark-button reservation-submit" type="submit">Request a table <ArrowUpRight size={17} /></button>
						<p className="reservation-note"><Clock3 size={15} /> Your table is confirmed once our team replies.</p>
						{notice && <p className="reservation-success" role="status">{notice}</p>}
					</form>
				</ScrollReveal>
			</div>
			<div className="reservation-footer container">
				<Users size={18} />
				<p>Planning for a larger group? Call us and we’ll help find the right table.</p>
			</div>
		</section>
	);
}
