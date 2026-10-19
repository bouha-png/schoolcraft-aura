# scanditek.net incident — read-only diagnostic (no changes made)

Checked 2026-10-19 16:35 UTC with the project domain tool, plus public lookups (1.1.1.1, .net parent servers) and HTTPS requests from the sandbox. The sandbox is not in Morocco.

## Observed facts
- Primary domain: **www.scanditek.net**, status **Active** for 226 days, ownership verified. The project is published.
- www.scanditek.net: A = 185.158.133.1 (matches what Lovable expects). TXT `_lovable.www` matches. No AAAA, no CNAME.
- Apex scanditek.net: status **initiated** for 7d20h ("Action required" in the UI). It has no A record, and its `_lovable` TXT is missing. It redirects to www once set up. The apex has MX (Google) and SPF/Google TXT records.
- scanditek.ma and www.scanditek.ma: Active. Both redirect to www.scanditek.net.
- NS: ns14/ns15.wixdns.net. The parent .net servers agree, so delegation is OK.
- DNSSEC: **enabled**. The parent DS is `43034 8 2 BC0279…F151F1C1`, and the DNSKEYs are published. Cloudflare's resolver sets the **AD flag** (signatures validate) for www.scanditek.net, so the DNSSEC chain is valid right now.
- HTTPS from the sandbox: www.scanditek.net returns 200 via 185.158.133.1.
- Comparison address: **https://schoolcraft-aura.lovable.app**, which resolves to 185.41.148.1/.2 (a different network from 185.158.133.1). It currently returns 302, which redirects to the primary www.scanditek.net.

## Support's claims vs. evidence
- "www Live, A/TXT correct": confirmed.
- "DNSSEC enabled at Wix": confirmed.
- "DNSSEC should be disabled": not supported here. The signatures validate. A broken DNSSEC chain gives DNS failures (SERVFAIL / "server not found"), not ERR_CONNECTION_TIMED_OUT. This is untested from Moroccan resolvers.
- "Apex is Action required": confirmed. It explains failures for people who type the address without www, not timeouts on www.

## Untested hypotheses
- A network path problem between Moroccan ISPs and 185.158.133.1 (routing, filtering). This fits a timeout after DNS works, but it has not been tested from Morocco.
- If the Moroccan test devices use DNS resolvers that fail DNSSEC validation, the error would be a DNS error, not a timeout.

## Tests to request from someone in Morocco (no changes needed)
1. `nslookup www.scanditek.net`: does it return 185.158.133.1?
2. Open https://schoolcraft-aura.lovable.app. Because of the redirect, a successful load ends on www. Note whether the first hop connects.
3. `ping 185.158.133.1` and `tracert 185.158.133.1` (Windows), and send the output to support.
4. Same tests on mobile data with a different ISP (Maroc Telecom / Orange / inwi).

## Not available to me
- I have no test point in Morocco.
- I cannot see the Wix DNS panel, Lovable edge/network logs, or the DCV/TLS certificate records.
