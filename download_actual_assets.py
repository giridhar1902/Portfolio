import urllib.request
import os

assets = [
    # Screen 1: DESIGN.md Specification
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzFmNjFiNDEwMDIyMzQ0M2ViMWUyODFkYTQyOWU3YmMzEgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "a5cad309314344f1b698642ad502b18e.md"
    },
    # Screen 2: Operator Context v3 HTML & PNG
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MjQxMTJkMGYxMGYwMWE2MGVmOTM1MTgxNzk1EgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "058907b830dc43c9837f647473721603.html"
    },
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0ugWpoTrNyLepd-lIvVVcifwBivYmW9jTLuNtZyK5uNwujtQfYDd4hfDmD0LqCHujNYStvOT268tW3YlPSITXaocPQvbIJzz_6JRkdSOqA9itsXQ7s5BIeg-F9lbwLGerhdVgmZqihlxPVSgKP78sQAQQworTgbD-odXt8aLot5w5KCEnooN448KdfLzIjz1X9yWijcWf4TWO8Ze4OXFFQluiY2tVRKfplgK4kHwIgbIVmG5iUTKUN8pbJw",
        "dest": "058907b830dc43c9837f647473721603.png"
    },
    # Screen 3: Execution Archive Ledger HTML & PNG
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MjQxMTJlOTAzODAwMzMyY2I2MDIyMDY5NGJmEgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "0ff8fa7ca44a41e8bd4844879780c154.html"
    },
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0uhK-RM87i8LpysHpiDPK_FKkvX82lhJn0FrQe7XFbpTDA1cXsoCUzywebYbsEQu_cKIro7Zi1D9lBLoOl4cTgxcdGfmeJ1Mpv8G-oOYcHxIk8eIEK9KqeN9lS7yjMAowdxd76JExu4t7aS4ebKJwaCavELU--cz8LYie3JilKqthlHD-2HjBo37kiXSrVJfCejL_JrXuHh-w-dQwrfQ3hMmTSgJNR8rxT4hYQUIdRpzf7o0Uf_zSNSTRw",
        "dest": "0ff8fa7ca44a41e8bd4844879780c154.png"
    },
    # Screen 4: Product Builder Homepage HTML & PNG
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MjQxMTJmMzc5ODgwMDMwMzQ2M2NlMjI0ZDE5EgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "2b8be5c789f04feca4a7ea860337b6d4.html"
    },
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0ujuXwrncUekL-VprvYe0dsegIZXEOpURLRBtcniUuor5SYDazxJNblMdD3BGMq8kTHs-s5XxdSoIOGbZ8fJDkPkPcSEMZFTES04TJyJj5w_OWk46iCavLOZP0WNVRSQTU5gm5Ttngia1KZG30L8sl_PBRjJXq106WcHM5lUKEW9Alxjz-N5TAhb6Lg0pKXPGqNvWbd7u3fb0tniR7_q3C3H9uGVxZNL-XdCQFDclY7phi-f_wF9f8WAJoI",
        "dest": "2b8be5c789f04feca4a7ea860337b6d4.png"
    },
    # Screen 5: Domvio Case Study with WhatsApp Mockup HTML & PNG
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MjQxMTMzMTY4NmYwMzgzOGRhODc4MTM2Mjc1EgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "ca8820ea6b63497e8123462be7f149bf.html"
    },
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0ugbrHNnsH-Ax8Ciqmme3Y-NqKkYeIa-8kWnyTDds06GDh9V_aC8l3hQEpw4lPX3zjPKpjzZfXaThXYBQwmjUALM3yiXOL25KL3W7xJpnIVlHNtNPcsWAwjRVG9hfBwPDKKXzFkgh3cblaH2-6HI6ZqoFqme_A4kj_a9Ki6GiAshgmzzCK7g_H6J7R-4C7urTkO2Wnb_1M8PHOxjlV50vUoO2ixRLscj-aOqdbxp76bisFPQEIulYLE0t-w",
        "dest": "ca8820ea6b63497e8123462be7f149bf.png"
    },
    # Screen 6: Stack & Tooling Page v2 HTML & PNG
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MjQxMTMxNGM5MjQwMDMwMzZjNGRiMjg0ODE0EgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "fa85f43621a049eb9568d6140274e3be.html"
    },
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0uicE-xuWRBnCPIu4rjtMj6siILSqfPbHvHQn1YMuqbeMrlRcLVR9axfJd55wLptfPav6oiF3oEGIXBk1AsfZGo8Xq7SglJeZPnC3mrvJpXwTtZXolaKAvs8BrqA6NKH5LBleHV06jBGhcrw8joKSYimtcc-qcWvIQpOVKCtLRjoqu9PvFAewZ7ylj0R4n3CUahY8LMmWCEvROeh1Z24QWjOExPIoP2tigN7OclJDJo3rzeH8qTOSdWnAQM",
        "dest": "fa85f43621a049eb9568d6140274e3be.png"
    },
    # Screen 7: DESIGN.md Specification: Giridhar Reddy Portfolio (Brutalist Minimalist)
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzM2MjZhYWNiZTllMzQ4YmQ5YjY4YTY5ZThjNGU4MGJmEgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "283af887bcda4c499577861b6f2f04b2.md"
    },
    # Screen 8: WhatsApp Mockup Image
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0ujghx2aOEOYXGqCPq9TwLCF8GvSCiZu7lf0jHWPu8Rhb7lP2IgWJhUoWDqRXS50B7b3f5ItD-7U-tWmSEMCQKo5sSaM65dPcXytVT3-xK3lW_Ps6KOV9Up4_fd7ZTNoHUlLl2zE3V3yV7gGa0kfHJB2CIIv_KIRW3M7w0Hnc4TiOQNKA6CtiVYfjxFCCZ6zQkpUDuwx4J-Oq1eXFNv_NnIungkJCK5-7J4_L-PwRK8b3jVZypdTYHowpVY",
        "dest": "959b2338232e4834b22b142d27d19e99.png"
    },
    # Screen 10: About Giridhar Reddy HTML & PNG
    {
        "url": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1MjQxMTMwMzVjMDUwOTEwNmQyMDdiMjUxNjc2EgsSBxCggMau6BEYAZIBIwoKcHJvamVjdF9pZBIVQhMzMjc5NjIzODEzMzc1MDE3MDA0&filename=&opi=89354086",
        "dest": "fa6ef0cd2a7c415e89435cb11519baa2.html"
    },
    {
        "url": "https://lh3.googleusercontent.com/aida/ADBb0uiNNH0LtEEZh1UfKteNGO9RkSYfWVL1NmBkFt95-yma318inhOskie5LjyIO5ArsXo3ifdqv0-6sZBsvNphMp6IXVFXRF_uSYjW1HyQ0vbHlCsBNQLBbn6n05qrvuPpx54O18Q1iS9_4bOL7TtRAV7wgJDo8rMQideq6FquHeILxMucrgBFxK6FOWaaMeVO9nnX8yrj8JevWzIffX52yzZXHKuxiDIG2hgKkjVg8yKyRWlOAPseZUFIpXw",
        "dest": "fa6ef0cd2a7c415e89435cb11519baa2.png"
    }
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

print("Starting download of current assets...")
for item in assets:
    url = item["url"]
    dest = item["dest"]
    print(f"Downloading {dest}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(dest, 'wb') as f:
                f.write(response.read())
        print(f"Successfully saved to {dest}")
    except Exception as e:
        print(f"Error downloading {dest}: {e}")

print("All downloads processed.")
