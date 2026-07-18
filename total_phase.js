(() => {
    "use strict";

    /* =========================================================
       SYSTEM MASTER REGISTRY DATA (18 PIPELINE MODULES)
    ========================================================= */
    const STAGE_REGISTRY = [
        { id: 1, name: "Secure Bootloader", status: "Active", desc: "Integrity validation execution routine.", scope: "Kernel Layer" },
        { id: 2, name: "Phase Core Registry", status: "Active", desc: "Dynamic map indexing module pipeline states.", scope: "Kernel Layer" },
        { id: 3, name: "DOM Master Loader", status: "Active", desc: "Verifies application view bindings framework.", scope: "View Layer" },
        { id: 4, name: "Session Guardian", status: "Active", desc: "Validates active browser sessionStorage structures.", scope: "Security Layer" },
        { id: 5, name: "Rate Throttler", status: "Active", desc: "Enforces input lockout parameters on failure counters.", scope: "Security Layer" },
        { id: 6, name: "Auth Core Route", status: "Active", desc: "Hardcoded user authentication profile evaluations.", scope: "Security Layer" },
        { id: 7, name: "2FA Verification Link", status: "Pending", desc: "One-time passcode handshake integration connector.", scope: "Security Layer" },
        { id: 8, name: "Role Configuration View", status: "Pending", desc: "Conditional rendering parser for workspace tiers.", scope: "View Layer" },
        { id: 9, name: "AI Status Broker", status: "Pending", desc: "Handles system greeting header layout telemetry.", scope: "Integration Layer" },
        { id: 10, name: "Dashboard Card Grid", status: "Pending", desc: "Renders the 10 core analytics reporting containers.", scope: "View Layer" },
        { id: 11, name: "Account Ledger Module", status: "Pending", desc: "Pipes real-time transaction updates to UI elements.", scope: "Ledger Layer" },
        { id: 12, name: "Compliance Auditor", status: "Pending", desc: "Validates system protocols against ISO 20022 formats.", scope: "Ledger Layer" },
        { id: 13, name: "Bakong API Network Sweep", status: "Pending", desc: "Interbank payment verification connection broker.", scope: "Integration Layer" },
        { id: 14, name: "SOC Telemetry Node", status: "Pending", desc: "Security Operations Center real-time trace tracking.", scope: "Security Layer" },
        { id: 15, name: "Clearing Queue Dispatch", status: "Pending", desc: "Provisions large-scale institutional fund pools.", scope: "Ledger Layer" },
        { id: 16, name: "System Audit Tracker", status: "Pending", desc: "Maintains read-only logs for environment state reports.", scope: "Audit Layer" },
        { id: 17, name: "Stress Core Engine", status: "Pending", desc: "Monitors processing workloads during batch calls.", scope: "Audit Layer" },
        { id: 18, name: "AI Core Diagnostics", status: "Pending", desc: "Background diagnostic evaluation module.", scope: "Integration Layer" }
    ];

    let selectedNodeId = null;

    /* =========================================================
       CALCULATION & COMPLIANCE PIPELINES
    ========================================================= */
    function refreshOrchestrationTelemetry() {
        const total = STAGE_REGISTRY.length;
        const activeCount = STAGE_REGISTRY.filter(s => s.status === "Active").length;
        const pendingCount = total - activeCount;
        const pct = Math.round((activeCount / total) * 100);

        const totalEl = document.getElementById("totalPhasesCount");
        const activeEl = document.getElementById("activePhasesCount");
        const pendEl = document.getElementById("pendingPhasesCount");
        const barEl = document.getElementById("completionProgressBar");
        const pctEl = document.getElementById("progressPctText");

        if (totalEl) totalEl.textContent = total.toString();
        if (activeEl) activeEl.textContent = activeCount.toString();
        if (pendEl) pendEl.textContent = pendingCount.toString();
        if (barEl) barEl.style.width = `${pct}%`;
        if (pctEl) pctEl.textContent = `${pct}% of core architecture nodes initialized`;
    }

    /* =========================================================
       DATA TEMPLATE RENDER ENGINES
    ========================================================= */
    function renderPhaseMapMatrix() {
        const container = document.getElementById("phaseGridContainer");
        if (!container) return;

        container.innerHTML = STAGE_REGISTRY.map(node => {
            const isActive = node.status === "Active" ? "active-module" : "";
            const isSelected = node.id === selectedNodeId ? "selected-node" : "";

            return `
                <div class="phase-node ${isActive} ${isSelected}" data-id="${node.id}">
                    <span class="node-code">PHASE ${String(node.id).padStart(2, '0')}</span>
                    <span class="node-title">${node.name}</span>
                </div>
            `;
        }).join("");
    }

    function renderInspectorView() {
        const view = document.getElementById("inspectorCardView");
        if (!view) return;

        const node = STAGE_REGISTRY.find(n => n.id === selectedNodeId);
        if (!node) {
            view.innerHTML = `
                <div class="empty-state">
                    <p>Select any architecture node from the matrix map to inspect environment context details, lifecycle tracking status, and telemetry execution logs.</p>
                </div>`;
            return;
        }

        const badgeClass = node.status === "Active" ? "active" : "pending";
        const logTimestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);

        view.innerHTML = `
            <div class="inspector-details">
                <h4>${node.name}</h4>
                <p class="inspector-subtitle">Pipeline Node Reference #${node.id}</p>

                <div class="meta-group">
                    <label>Operational Domain</label>
                    <p>${node.scope}</p>
                </div>

                <div class="meta-group">
                    <label>Functional Objective</label>
                    <p>${node.desc}</p>
                </div>

                <div class="meta-group">
                    <label>Orchestration Status</label>
                    <span class="status-tag ${badgeClass}">${node.status}</span>
                </div>

                <div class="meta-group">
                    <label>Telemetry Environment Logs</label>
                    <div class="log-terminal">
                        [${logTimestamp}] INFO: Querying registry status...<br>
                        [${logTimestamp}] STATUS: Node parsed under ${node.scope}.<br>
                        [${logTimestamp}] STATE: ${node.status === 'Active' ? 'Nominal allocation verified.' : 'Awaiting sequence index clearance.'}
                    </div>
                </div>
            </div>
        `;
    }

    /* =========================================================
       EVENT SUBSCRIPTIONS MAPPINGS
    ========================================================= */
    document.addEventListener("DOMContentLoaded", () => {
        refreshOrchestrationTelemetry();
        renderPhaseMapMatrix();

        // Delegate grid node selection actions
        const grid = document.getElementById("phaseGridContainer");
        if (grid) {
            grid.addEventListener("click", (e) => {
                const node = e.target.closest(".phase-node");
                if (!node) return;

                selectedNodeId = parseInt(node.getAttribute("data-id"), 10);
                renderPhaseMapMatrix();
                renderInspectorView();
            });
        }

        // Sequential stage loader activation flow simulation
        document.getElementById("initializeAllBtn")?.addEventListener("click", () => {
            const nextPending = STAGE_REGISTRY.find(s => s.status === "Pending");
            if (!nextPending) {
                alert("All coordinated deployment architectures are completely initialized.");
                return;
            }

            nextPending.status = "Active";
            selectedNodeId = nextPending.id;
            
            refreshOrchestrationTelemetry();
            renderPhaseMapMatrix();
            renderInspectorView();
        });

        // Verification validation check simulation 
        document.getElementById("validateRegistryBtn")?.addEventListener("click", () => {
            console.log("[PHASE ARCHITECTURE] Triggering cryptographic check on module registry array...");
            alert("Phase matrix registers matching checksum constraints successfully.");
        });
    });

})();
